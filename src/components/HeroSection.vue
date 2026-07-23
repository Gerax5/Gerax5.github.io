<script setup lang="ts">
import AppButton from './ui/AppButton.vue'
import { profile } from '@/data/portfolio'
</script>

<template>
  <section
    id="hero"
    class="flex flex-col items-center justify-center px-margin-x pb-section-gap pt-40 text-center"
  >
    <div class="flex max-w-3xl flex-col items-center">
      <div v-reveal class="mb-stack-lg">
        <!-- El avatar se inclina siguiendo al cursor, con retraso -->
        <div
          v-tilt="{ max: 16, scale: 1.06, glare: true }"
          class="tilt-surface relative h-32 w-32 overflow-hidden rounded-full border-4 border-surface-container shadow-lg"
        >
          <img
            :src="profile.avatar"
            :alt="profile.name"
            class="h-full w-full object-cover"
            data-tilt-depth="1"
          />
        </div>
      </div>

      <h1 v-reveal="80" class="mb-stack-md font-headline-xl text-headline-xl-mobile md:text-headline-xl">
        {{ profile.name }}
      </h1>

      <p v-reveal="160" class="mb-stack-lg font-headline-lg text-headline-lg text-secondary">
        {{ profile.role }}
      </p>

      <div v-reveal="240" class="mt-stack-lg flex flex-wrap justify-center gap-stack-md">
        <AppButton href="#projects" icon="arrow_downward">View Projects</AppButton>
        <AppButton :href="profile.cv" download="CV Gabriel Pineda.pdf" variant="outlined" icon="download"
          >Download CV</AppButton
        >
      </div>
    </div>
  </section>
</template>
