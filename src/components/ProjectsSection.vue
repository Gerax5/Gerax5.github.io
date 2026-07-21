<script setup lang="ts">
import ProjectCard from './ProjectCard.vue'
import { projects } from '@/data/portfolio'
</script>

<template>
  <section id="projects" class="bg-surface-container-low py-section-gap">
    <div class="mx-auto max-w-container-max px-margin-x">
      <div v-reveal class="mb-stack-lg flex flex-col justify-between gap-stack-md md:flex-row md:items-end">
        <div>
          <h2 class="mb-stack-sm font-label-caps text-label-caps uppercase text-primary">Selected work</h2>
          <h3 class="font-headline-lg text-headline-lg">Featured Projects</h3>
        </div>
      </div>

      <div class="grid grid-cols-1 gap-gutter md:grid-cols-2">
        <div v-for="(project, index) in projects" :key="project.name" v-reveal="index * 150">
          <ProjectCard :project="project" />
        </div>
      </div>
    </div>
  </section>
</template>
