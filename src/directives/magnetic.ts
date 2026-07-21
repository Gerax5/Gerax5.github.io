import type { Directive } from 'vue'
import { createFollower, pointerOffset, prefersReducedMotion, type Follower } from './animation-utils'

interface MagneticEl extends HTMLElement {
  _magnetic?: {
    follower: Follower
    onMove: (e: PointerEvent) => void
    onLeave: () => void
  }
}

/**
 * v-magnetic — el botón se desplaza levemente hacia el cursor mientras está
 * encima y regresa al centro al salir. `binding.value` = px de recorrido.
 */
export const vMagnetic: Directive<MagneticEl, number | undefined> = {
  mounted(el, binding) {
    if (prefersReducedMotion()) return

    const strength = binding.value ?? 8
    el.style.willChange = 'transform'

    const follower = createFollower({ x: 0, y: 0 }, 0.14, (v) => {
      el.style.transform = `translate3d(${v.x.toFixed(2)}px, ${v.y.toFixed(2)}px, 0)`
    })

    const onMove = (event: PointerEvent) => {
      const { x, y } = pointerOffset(el, event)
      follower.target.x = x * strength
      follower.target.y = y * strength
      follower.kick()
    }

    const onLeave = () => {
      follower.target.x = 0
      follower.target.y = 0
      follower.kick()
    }

    el.addEventListener('pointermove', onMove)
    el.addEventListener('pointerleave', onLeave)

    el._magnetic = { follower, onMove, onLeave }
  },

  unmounted(el) {
    const state = el._magnetic
    if (!state) return
    state.follower.stop()
    el.removeEventListener('pointermove', state.onMove)
    el.removeEventListener('pointerleave', state.onLeave)
    delete el._magnetic
  },
}
