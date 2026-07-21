<script setup lang="ts">
withDefaults(
  defineProps<{
    href: string
    variant?: 'filled' | 'outlined'
    icon?: string
    size?: 'md' | 'lg'
    magnet?: number
  }>(),
  { variant: 'filled', icon: '', size: 'md', magnet: 10 },
)
</script>

<template>
  <a
    v-magnetic="magnet"
    :href="href"
    class="group relative inline-flex items-center gap-2 overflow-hidden rounded-full font-semibold transition-[background-color,color,border-color,box-shadow] duration-500 ease-soft"
    :class="[
      size === 'lg' ? 'px-10 py-5 text-lg' : 'px-8 py-4',
      variant === 'filled'
        ? 'bg-primary text-on-primary hover:bg-primary-container hover:shadow-[0_12px_32px_-12px_rgba(99,14,212,0.65)]'
        : 'border border-outline text-on-surface hover:border-primary hover:bg-primary-fixed hover:text-primary',
    ]"
  >
    <!-- Destello que barre el botón al entrar el cursor -->
    <span
      class="pointer-events-none absolute inset-0 -translate-x-[120%] skew-x-[-20deg] bg-white/25 opacity-0 group-hover:animate-sheen-sweep group-hover:opacity-100"
      aria-hidden="true"
    />
    <span class="relative z-10"><slot /></span>
    <span
      v-if="icon"
      class="material-symbols-outlined relative z-10 text-[18px] transition-transform duration-500 ease-springy group-hover:translate-x-1"
      >{{ icon }}</span
    >
  </a>
</template>
