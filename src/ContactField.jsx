import { useEffect, useMemo, useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { pixelDensity, observeVisibility } from './gate'

// A hand written flow field behind the contact section, drawn with
// react-three-fiber directly rather than through a gradient library.
//
// It is one full screen triangle and one fragment shader: no geometry, no
// lights, no textures. That keeps it cheap enough to sit under a section the
// visitor is meant to linger on and read.
const frag = /* glsl */ `
precision highp float;
uniform float uTime;
uniform vec2  uRes;
uniform vec2  uPointer;

// Cheap value noise. Three octaves is plenty at this scale.
float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float noise(vec2 p){
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1,0)), u.x),
             mix(hash(i + vec2(0,1)), hash(i + vec2(1,1)), u.x), u.y);
}
float fbm(vec2 p){
  float v = 0.0, a = 0.5;
  for (int i = 0; i < 3; i++) { v += a * noise(p); p *= 2.02; a *= 0.5; }
  return v;
}

void main(){
  vec2 uv = gl_FragCoord.xy / uRes;
  vec2 p  = uv * vec2(uRes.x / uRes.y, 1.0);

  float t = uTime * 0.045;

  // The field drifts, and leans very slightly toward the cursor.
  vec2 q = p * 1.6 + vec2(t, -t * 0.6) + uPointer * 0.12;
  float n  = fbm(q);
  float n2 = fbm(q * 1.7 + n * 1.4 + vec2(-t * 0.8, t));

  // The site's three spectrum tokens, kept dark so type stays readable.
  vec3 cyan = vec3(0.176, 0.882, 1.0);
  vec3 mag  = vec3(1.0,   0.176, 0.608);
  vec3 lime = vec3(0.800, 1.0,   0.200);

  vec3 col = mix(cyan, mag, smoothstep(0.25, 0.85, n));
  col = mix(col, lime, smoothstep(0.55, 1.0, n2) * 0.30);

  // Bands, so it reads as a field rather than a blur.
  float band = smoothstep(0.42, 0.62, fract(n2 * 2.6 + t * 1.4));
  col *= 0.55 + band * 0.55;

  // Vignette down to the page background at the edges so it has no seam.
  float v = smoothstep(1.15, 0.15, length(uv - 0.5) * 1.5);
  float amt = pow(n2, 1.5) * v * 0.55;

  gl_FragColor = vec4(col * amt, amt);
}
`

const vert = /* glsl */ `
void main(){ gl_Position = vec4(position.xy, 0.0, 1.0); }
`

function Field() {
  const mat = useRef()
  const { size, viewport } = useThree()

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uRes: { value: new THREE.Vector2(1, 1) },
      uPointer: { value: new THREE.Vector2(0, 0) },
    }),
    []
  )

  useEffect(() => {
    uniforms.uRes.value.set(size.width * viewport.dpr, size.height * viewport.dpr)
  }, [size, viewport, uniforms])

  useEffect(() => {
    const onMove = (e) => {
      uniforms.uPointer.value.set(
        (e.clientX / window.innerWidth) * 2 - 1,
        (e.clientY / window.innerHeight) * 2 - 1
      )
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [uniforms])

  useFrame((_, dt) => {
    // Clamp so a backgrounded tab cannot jump the animation on return.
    uniforms.uTime.value += Math.min(dt, 0.05)
  })

  return (
    <mesh frustumCulled={false}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={mat}
        vertexShader={vert}
        fragmentShader={frag}
        uniforms={uniforms}
        transparent
        depthTest={false}
        depthWrite={false}
      />
    </mesh>
  )
}

export default function ContactField() {
  const host = useRef(null)
  const [live, setLive] = useState(false)

  useEffect(() => {
    if (!host.current) return
    return observeVisibility(host.current, setLive)
  }, [])

  return (
    <div className="r3f-host" ref={host} aria-hidden="true">
      <Canvas
        dpr={pixelDensity()}
        gl={{ antialias: false, alpha: true, powerPreference: 'high-performance' }}
        frameloop={live ? 'always' : 'never'}
        style={{ position: 'absolute', inset: 0 }}
      >
        <Field />
      </Canvas>
    </div>
  )
}
