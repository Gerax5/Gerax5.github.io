import type { Directive } from 'vue'

interface RevealEl extends HTMLElement {
  _revealObserver?: IntersectionObserver
}

/**
 * v-reveal — fade + slide-up al entrar en viewport.
 * `binding.value` es el retardo en ms para escalonar elementos hermanos.
 */
export const vReveal: Directive<RevealEl, number | undefined> = {
  mounted(el, binding) {
    const delay = binding.value ?? 0

    el.style.opacity = '0'
    el.style.transform = 'translateY(28px)'
    el.style.transition = `opacity 900ms cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 900ms cubic-bezier(0.22,1,0.36,1) ${delay}ms`

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' },
    )

    observer.observe(el)
    el._revealObserver = observer
  },

  unmounted(el) {
    el._revealObserver?.disconnect()
    delete el._revealObserver
  },
}
