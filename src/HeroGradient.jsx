import { useEffect, useRef, useState } from 'react'
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'
import { pixelDensity, observeVisibility } from './gate'

// A slow moving gradient behind the hero headline.
//
// The colours are the site's own spectrum tokens, darkened. The point is
// atmosphere behind the type, not a poster: the CSS keeps it dim and the
// headline keeps its contrast. Nothing here is allowed to compete with the
// words in front of it.
export default function HeroGradient() {
  const host = useRef(null)
  const [live, setLive] = useState(true)

  useEffect(() => {
    if (!host.current) return
    return observeVisibility(host.current, setLive)
  }, [])

  return (
    <div className="sg-host" ref={host} aria-hidden="true">
      <ShaderGradientCanvas
        style={{ position: 'absolute', inset: 0 }}
        pixelDensity={pixelDensity()}
        fov={40}
        pointerEvents="none"
        // Stop the render loop entirely when the hero is off screen.
        frameloop={live ? 'always' : 'never'}
      >
        <ShaderGradient
          animate="on"
          type="waterPlane"
          shader="defaults"
          uSpeed={0.16}
          uStrength={1.6}
          uDensity={1.3}
          uFrequency={5.5}
          uAmplitude={0}
          color1="#2de1ff"
          color2="#ff2d9b"
          color3="#0a0a12"
          cDistance={3.2}
          cPolarAngle={115}
          cAzimuthAngle={180}
          positionX={0}
          positionY={0}
          positionZ={0}
          rotationX={45}
          rotationY={0}
          rotationZ={-60}
          brightness={1.1}
          grain="off"
          lightType="3d"
          reflection={0.1}
        />
      </ShaderGradientCanvas>
    </div>
  )
}
