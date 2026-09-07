import { createRoot } from 'react-dom/client'
import { lazy, Suspense } from 'react'

const HeroGradient = lazy(() => import('./HeroGradient'))
const ContactField = lazy(() => import('./ContactField'))

// Mounts the two WebGL layers into holes left for them in index.html.
// If this never runs, both holes stay empty and the CSS underneath is the
// finished design.
export default function boot() {
  const mount = (id, Node) => {
    const el = document.getElementById(id)
    if (!el) return
    createRoot(el).render(
      <Suspense fallback={null}>
        <Node />
      </Suspense>
    )
  }

  mount('shaderMount', HeroGradient)
  mount('fieldMount', ContactField)
  document.documentElement.classList.add('has-webgl')
}
