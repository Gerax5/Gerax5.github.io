/**
 * Motor de interpolación compartido por las directivas de movimiento.
 *
 * La idea: nunca escribimos el valor del cursor directamente en el `transform`.
 * Guardamos un valor objetivo y en cada frame nos acercamos un porcentaje
 * (`ease`) hacia él. Eso convierte el seguimiento "duro" del mouse en un
 * deslizamiento suave que además sigue moviéndose un instante al salir.
 */

export const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export type Vec = Record<string, number>

export interface Follower {
  /** Valor objetivo hacia el que interpolamos. */
  target: Vec
  /** Valor actual (el que se pinta). */
  current: Vec
  /** Arranca el bucle si no está corriendo. */
  kick: () => void
  /** Cancela el bucle pendiente. */
  stop: () => void
}

/**
 * @param ease  fracción de la distancia recorrida por frame (0-1). Más bajo = más suave.
 * @param apply se llama en cada frame con los valores interpolados.
 */
export function createFollower(initial: Vec, ease: number, apply: (v: Vec) => void): Follower {
  const target: Vec = { ...initial }
  const current: Vec = { ...initial }
  let frame = 0

  const step = () => {
    let moving = false

    for (const key in target) {
      const delta = target[key] - current[key]
      if (Math.abs(delta) > 0.001) {
        current[key] += delta * ease
        moving = true
      } else {
        current[key] = target[key]
      }
    }

    apply(current)
    frame = moving ? requestAnimationFrame(step) : 0
  }

  return {
    target,
    current,
    kick: () => {
      if (!frame) frame = requestAnimationFrame(step)
    },
    stop: () => {
      if (frame) cancelAnimationFrame(frame)
      frame = 0
    },
  }
}

/** Posición del puntero dentro del elemento, normalizada a [-1, 1] desde el centro. */
export function pointerOffset(el: HTMLElement, event: PointerEvent | MouseEvent) {
  const rect = el.getBoundingClientRect()
  return {
    x: ((event.clientX - rect.left) / rect.width - 0.5) * 2,
    y: ((event.clientY - rect.top) / rect.height - 0.5) * 2,
  }
}
