import type { Directive } from 'vue'
import { createFollower, pointerOffset, prefersReducedMotion, type Follower } from './animation-utils'

export interface TiltOptions {
  /** Grados máximos de rotación en cada eje. */
  max?: number
  /** Escala al hacer hover. */
  scale?: number
  /** Desplazamiento en px de los hijos marcados con `data-tilt-depth`. */
  depth?: number
  /** Brillo que sigue al cursor. */
  glare?: boolean
}

interface TiltEl extends HTMLElement {
  _tilt?: {
    follower: Follower
    onMove: (e: PointerEvent) => void
    onLeave: () => void
    onEnter: () => void
    glare?: HTMLElement
  }
}

/**
 * v-tilt — inclina el elemento en 3D siguiendo la posición del cursor.
 * El seguimiento es interpolado, así que la imagen "persigue" al mouse
 * con retraso en vez de pegarse a él.
 */
export const vTilt: Directive<TiltEl, TiltOptions | undefined> = {
  mounted(el, binding) {
    if (prefersReducedMotion()) return

    const { max = 10, scale = 1.03, depth = 0, glare = false } = binding.value ?? {}
    const layers = depth ? Array.from(el.querySelectorAll<HTMLElement>('[data-tilt-depth]')) : []

    let glareEl: HTMLElement | undefined
    if (glare) {
      glareEl = document.createElement('div')
      glareEl.style.cssText =
        'position:absolute;inset:0;pointer-events:none;opacity:0;transition:opacity .4s ease;' +
        'background:radial-gradient(circle at var(--gx,50%) var(--gy,50%),rgba(255,255,255,.35),transparent 55%);'
      el.appendChild(glareEl)
    }

    el.style.transformStyle = 'preserve-3d'
    el.style.willChange = 'transform'

    const follower = createFollower({ rx: 0, ry: 0, s: 1, gx: 50, gy: 50 }, 0.11, (v) => {
      el.style.transform = `perspective(900px) rotateX(${v.rx.toFixed(3)}deg) rotateY(${v.ry.toFixed(
        3,
      )}deg) scale(${v.s.toFixed(4)})`

      if (glareEl) {
        glareEl.style.setProperty('--gx', `${v.gx}%`)
        glareEl.style.setProperty('--gy', `${v.gy}%`)
      }

      for (const layer of layers) {
        const factor = Number(layer.dataset.tiltDepth || 1)
        // los hijos se desplazan en sentido contrario -> sensación de profundidad
        layer.style.transform = `translate3d(${(-v.ry / max) * depth * factor}px, ${
          (v.rx / max) * depth * factor
        }px, 0)`
      }
    })

    const onMove = (event: PointerEvent) => {
      const { x, y } = pointerOffset(el, event)
      follower.target.rx = -y * max
      follower.target.ry = x * max
      follower.target.gx = (x * 0.5 + 0.5) * 100
      follower.target.gy = (y * 0.5 + 0.5) * 100
      follower.kick()
    }

    const onEnter = () => {
      follower.target.s = scale
      if (glareEl) glareEl.style.opacity = '1'
      follower.kick()
    }

    const onLeave = () => {
      follower.target.rx = 0
      follower.target.ry = 0
      follower.target.s = 1
      if (glareEl) glareEl.style.opacity = '0'
      follower.kick()
    }

    el.addEventListener('pointermove', onMove)
    el.addEventListener('pointerenter', onEnter)
    el.addEventListener('pointerleave', onLeave)

    el._tilt = { follower, onMove, onLeave, onEnter, glare: glareEl }
  },

  unmounted(el) {
    const state = el._tilt
    if (!state) return
    state.follower.stop()
    el.removeEventListener('pointermove', state.onMove)
    el.removeEventListener('pointerenter', state.onEnter)
    el.removeEventListener('pointerleave', state.onLeave)
    state.glare?.remove()
    delete el._tilt
  },
}
