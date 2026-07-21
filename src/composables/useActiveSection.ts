import { onBeforeUnmount, onMounted, ref } from 'vue'

/** Altura del header fijo: la línea imaginaria que decide qué sección está "activa". */
const HEADER_OFFSET = 88

/**
 * Scroll-spy posicional: gana la última sección cuyo borde superior ya cruzó
 * la línea del header.
 *
 * Se hace por posición y no con `intersectionRatio` a propósito: comparar
 * ratios entre secciones de alturas muy distintas favorece a las cortas, que
 * llenan el viewport en proporción antes que una sección larga.
 */
export function useActiveSection(ids: string[]) {
  const activeId = ref<string>('')
  let frame = 0

  function compute() {
    frame = 0
    const line = window.scrollY + HEADER_OFFSET
    let current = ''

    for (const id of ids) {
      const el = document.getElementById(id)
      if (!el) continue
      // rect + scrollY en vez de offsetTop: no depende del offsetParent
      const top = el.getBoundingClientRect().top + window.scrollY
      if (top <= line) current = id
    }

    // Al final de la página la última sección puede no llegar a cruzar la línea.
    const atBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 2
    if (atBottom) current = ids[ids.length - 1]

    activeId.value = current
  }

  function schedule() {
    if (!frame) frame = requestAnimationFrame(compute)
  }

  onMounted(() => {
    compute()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
  })

  onBeforeUnmount(() => {
    if (frame) cancelAnimationFrame(frame)
    window.removeEventListener('scroll', schedule)
    window.removeEventListener('resize', schedule)
  })

  return { activeId, refresh: compute }
}
