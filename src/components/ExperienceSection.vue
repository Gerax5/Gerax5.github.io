<script setup lang="ts">
import { timeline } from '@/data/portfolio'
</script>

<template>
  <section id="experience" class="mx-auto max-w-container-max px-margin-x py-section-gap">
    <h2 v-reveal class="mb-stack-md font-label-caps text-label-caps uppercase text-primary">My journey</h2>
    <h3 v-reveal="80" class="mb-stack-lg font-headline-lg text-headline-lg">Professional Experience</h3>

    <div class="flex max-w-3xl flex-col">
      <div
        v-for="(entry, index) in timeline"
        :key="entry.company"
        v-reveal="index * 140"
        class="group relative flex gap-stack-lg pb-stack-lg last:pb-0"
      >
        <div class="relative z-10">
          <div
            class="h-6 w-6 flex-shrink-0 rounded-full border-4 transition-all duration-500 ease-springy group-hover:scale-125"
            :class="
              entry.highlight
                ? 'border-primary bg-primary-fixed'
                : 'border-outline-variant bg-surface-container-high group-hover:border-primary'
            "
          />
        </div>

        <div class="flex-1">
          <div class="mb-stack-md flex flex-col justify-between md:flex-row md:items-center">
            <p class="text-headline-md font-bold text-primary">{{ entry.company }}</p>
            <span class="font-label-caps text-[12px] text-secondary">{{ entry.period }}</span>
          </div>

          <div class="ml-3 flex flex-col gap-stack-lg border-l border-outline-variant pl-stack-lg">
            <div v-for="role in entry.roles" :key="role.title" class="relative">
              <div
                class="absolute -left-[37px] top-2 h-2 w-2 rounded-full transition-colors duration-300"
                :class="role.current ? 'bg-primary' : 'bg-outline-variant'"
              />
              <h4 class="font-headline-md text-headline-md leading-none">{{ role.title }}</h4>
              <span class="mt-1 block font-label-caps text-[12px] text-secondary">{{ role.period }}</span>
              <p class="mt-2 leading-relaxed text-on-surface-variant">{{ role.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
