<script setup lang="ts">
import AppButton from './ui/AppButton.vue'
import { profile, socials } from '@/data/portfolio'
</script>

<template>
  <section id="contact" class="mx-auto max-w-container-max px-margin-x py-section-gap text-center">
    <div class="mx-auto max-w-2xl">
      <h2 v-reveal class="mb-stack-md font-label-caps text-label-caps uppercase text-primary">Stay in touch</h2>
      <h3 v-reveal="80" class="mb-stack-lg font-headline-xl text-headline-xl-mobile md:text-headline-xl">
        Get in touch.
      </h3>
      <p v-reveal="160" class="mb-stack-lg font-body-lg text-body-lg leading-relaxed text-on-surface-variant">
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your
        visions.
      </p>

      <div v-reveal="240" class="flex flex-col items-center gap-stack-lg">
        <div class="flex flex-wrap justify-center gap-stack-md">
          <AppButton :href="`mailto:${profile.email}`" size="lg">{{ profile.email }}</AppButton>
          <AppButton href="#" variant="outlined" size="lg" icon="download">Download CV</AppButton>
        </div>

        <div class="mt-stack-md flex gap-stack-md">
          <a
            v-for="social in socials"
            :key="social.label"
            v-magnetic="6"
            :href="social.url"
            :aria-label="social.label"
            class="flex h-12 w-12 items-center justify-center rounded-full border border-outline text-on-surface transition-[background-color,color,border-color] duration-400 ease-soft hover:border-primary-container hover:bg-primary-container hover:text-on-primary"
          >
            <span class="material-symbols-outlined">{{ social.icon }}</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
