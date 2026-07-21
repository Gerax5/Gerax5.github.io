<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { brand, navLinks } from '@/data/portfolio'
import { useActiveSection } from '@/composables/useActiveSection'

const { activeId, refresh: refreshActive } = useActiveSection(navLinks.map((l) => l.id))

const navRef = ref<HTMLElement | null>(null)
const linkRefs = ref<HTMLAnchorElement[]>([])
const hoveredId = ref<string | null>(null)
const menuOpen = ref(false)
const scrolled = ref(false)

/** Geometría de la píldora: se interpola por CSS, no por JS. */
const pill = ref({ x: 0, width: 0, visible: false })

const setLinkRef = (el: unknown, index: number) => {
  if (el instanceof HTMLAnchorElement) linkRefs.value[index] = el
}

/** El indicador prioriza el link bajo el cursor; si no hay, descansa en la sección activa. */
const targetId = computed(() => hoveredId.value ?? activeId.value)

function movePill() {
  const nav = navRef.value
  const index = navLinks.findIndex((l) => l.id === targetId.value)
  const link = index >= 0 ? linkRefs.value[index] : undefined

  if (!nav || !link) {
    pill.value = { ...pill.value, visible: false }
    return
  }

  const navBox = nav.getBoundingClientRect()
  const linkBox = link.getBoundingClientRect()

  pill.value = {
    x: linkBox.left - navBox.left,
    width: linkBox.width,
    visible: true,
  }
}

watch(targetId, () => nextTick(movePill))

// El -50% vertical va aquí y no como clase: este `transform` inline sobrescribe
// cualquier utilidad de Tailwind, así que el centrado tiene que viajar con él.
const pillStyle = computed(() => ({
  transform: `translate3d(${pill.value.x}px, -50%, 0)`,
  width: `${pill.value.width}px`,
  opacity: pill.value.visible ? '1' : '0',
}))

function onScroll() {
  scrolled.value = window.scrollY > 24
  refreshActive()
}

function closeMenu() {
  menuOpen.value = false
}

onMounted(() => {
  onScroll()
  movePill()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', movePill)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', movePill)
})
</script>

<template>
  <header
    class="fixed top-0 z-50 w-full transition-all duration-500 ease-soft"
    :class="
      scrolled
        ? 'bg-surface/80 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.06)]'
        : 'bg-surface/0 backdrop-blur-0'
    "
  >
    <nav class="mx-auto flex h-20 max-w-container-max items-center justify-between px-margin-x">
      <a
        href="#hero"
        class="font-headline-md text-headline-md font-bold tracking-tight text-on-surface transition-colors duration-300 hover:text-primary"
      >
        {{ brand }}
      </a>

      <!-- Nav desktop con indicador deslizante -->
      <div
        ref="navRef"
        class="relative hidden items-center gap-stack-lg md:flex"
        @pointerleave="hoveredId = null"
      >
        <!-- La píldora vive detrás de los links y se mueve con una curva suave -->
        <span
          class="pointer-events-none absolute left-0 top-1/2 -z-0 h-9 rounded-full bg-primary-fixed"
          :style="pillStyle"
          aria-hidden="true"
        />

        <a
          v-for="(link, index) in navLinks"
          :key="link.id"
          :ref="(el) => setLinkRef(el, index)"
          :href="`#${link.id}`"
          class="relative z-10 rounded-full px-4 py-2.5 font-label-caps text-label-caps uppercase transition-colors duration-300 ease-soft"
          :class="
            targetId === link.id ? 'text-primary' : 'text-on-surface-variant hover:text-primary'
          "
          @pointerenter="hoveredId = link.id"
        >
          {{ link.label }}
        </a>
      </div>

      <button
        class="text-on-surface transition-transform duration-300 ease-springy hover:scale-110 hover:text-primary md:hidden"
        :aria-expanded="menuOpen"
        aria-label="Abrir menú"
        @click="menuOpen = !menuOpen"
      >
        <span class="material-symbols-outlined">{{ menuOpen ? 'close' : 'menu' }}</span>
      </button>
    </nav>

    <!-- Menú móvil -->
    <Transition
      enter-active-class="transition-all duration-400 ease-soft"
      leave-active-class="transition-all duration-300 ease-soft"
      enter-from-class="opacity-0 -translate-y-3"
      leave-to-class="opacity-0 -translate-y-3"
    >
      <div v-if="menuOpen" class="border-t border-outline-variant/40 bg-surface/95 backdrop-blur-md md:hidden">
        <a
          v-for="link in navLinks"
          :key="link.id"
          :href="`#${link.id}`"
          class="block px-margin-x py-4 font-label-caps text-label-caps uppercase transition-colors duration-300"
          :class="activeId === link.id ? 'text-primary' : 'text-on-surface-variant'"
          @click="closeMenu"
        >
          {{ link.label }}
        </a>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
/* El desplazamiento del indicador: largo y con desaceleración fuerte. */
span[aria-hidden='true'] {
  transition:
    transform 550ms cubic-bezier(0.22, 1, 0.36, 1),
    width 550ms cubic-bezier(0.22, 1, 0.36, 1),
    opacity 300ms ease;
}

@media (prefers-reduced-motion: reduce) {
  span[aria-hidden='true'] {
    transition: opacity 150ms ease;
  }
}
</style>
