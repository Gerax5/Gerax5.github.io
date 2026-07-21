<script setup lang="ts">
import type { Project } from '@/data/portfolio'

defineProps<{ project: Project }>()
</script>

<template>
  <article
    v-tilt="{ max: 6, scale: 1.02, depth: 14 }"
    class="tilt-surface group relative overflow-hidden rounded-xl bg-surface shadow-[0_1px_2px_rgba(0,0,0,0.05)] transition-shadow duration-500 ease-soft hover:shadow-[0_28px_60px_-30px_rgba(25,28,29,0.45)]"
  >
    <div class="h-64 overflow-hidden bg-surface-variant">
      <!-- La imagen se despega del marco: parallax por `data-tilt-depth` + zoom -->
      <img
        :src="project.image"
        :alt="project.name"
        data-tilt-depth="1.4"
        class="h-full w-full scale-105 object-cover grayscale transition-[filter,transform] duration-700 ease-soft group-hover:scale-110 group-hover:grayscale-0"
      />
    </div>

    <div class="p-stack-lg">
      <h4 class="mb-2 font-headline-md text-headline-md transition-colors duration-300 group-hover:text-primary">
        {{ project.name }}
      </h4>
      <p class="mb-stack-md leading-relaxed text-on-surface-variant">{{ project.description }}</p>

      <div class="mb-stack-lg flex flex-wrap gap-2">
        <span
          v-for="tag in project.tags"
          :key="tag"
          class="rounded-full bg-primary-fixed px-3 py-1 font-code text-[12px] text-primary transition-transform duration-300 ease-springy hover:-translate-y-0.5"
        >
          {{ tag }}
        </span>
      </div>

      <div class="flex gap-stack-md">
        <a
          :href="project.demoUrl"
          class="group/link flex items-center gap-1 font-semibold text-primary transition-colors duration-300 hover:text-primary-container"
        >
          Live Demo
          <span
            class="material-symbols-outlined text-[18px] transition-transform duration-300 ease-springy group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
            >open_in_new</span
          >
        </a>
        <a
          :href="project.codeUrl"
          class="group/link flex items-center gap-1 font-semibold text-secondary transition-colors duration-300 hover:text-on-surface"
        >
          Code
          <span
            class="material-symbols-outlined text-[18px] transition-transform duration-300 ease-springy group-hover/link:translate-x-0.5"
            >code</span
          >
        </a>
      </div>
    </div>
  </article>
</template>
