<script setup lang="ts">
import { brand, footerLinks } from '@/data/portfolio'
</script>

<template>
  <footer class="w-full bg-surface-container-low py-stack-lg">
    <div
      class="mx-auto flex max-w-container-max flex-col items-center justify-between gap-stack-md px-margin-x md:flex-row"
    >
      <div class="flex flex-col items-center md:items-start">
        <div class="mb-stack-sm font-headline-md text-headline-md font-bold text-on-surface">
          {{ brand }}
        </div>
        <p class="font-body-md text-body-md text-secondary">
          © {{ new Date().getFullYear() }} Developer Portfolio. All rights reserved.
        </p>
      </div>

      <div class="flex gap-stack-lg">
        <a
          v-for="link in footerLinks"
          :key="link.label"
          :href="link.url"
          class="relative font-body-md text-body-md text-secondary transition-colors duration-300 hover:text-primary"
        >
          {{ link.label }}
          <!-- subrayado que crece desde la izquierda (ver <style scoped>) -->
          <span
            class="absolute -bottom-0.5 left-0 h-px w-0 bg-primary transition-[width] duration-400 ease-soft"
            aria-hidden="true"
          />
        </a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
a:hover > span {
  width: 100%;
}
</style>
