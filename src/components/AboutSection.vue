<script setup lang="ts">
import { profile, skillGroups } from '@/data/portfolio'
</script>

<template>
  <section id="about" class="mx-auto max-w-container-max px-margin-x py-section-gap">
    <div class="grid grid-cols-1 items-start gap-gutter lg:grid-cols-12">
      <div v-reveal class="pr-0 lg:col-span-7 lg:pr-stack-lg">
        <h2 class="mb-stack-md font-label-caps text-label-caps uppercase text-primary">About me</h2>
        <p
          v-for="(paragraph, i) in profile.bio"
          :key="i"
          class="font-body-lg text-body-lg leading-relaxed text-on-surface-variant"
          :class="{ 'mt-stack-md': i > 0 }"
        >
          {{ paragraph }}
        </p>
      </div>

      <div id="skills" class="mt-stack-lg flex flex-col gap-stack-lg lg:col-span-5 lg:mt-0">
        <div v-for="(group, index) in skillGroups" :key="group.title" v-reveal="index * 120">
          <h3 class="mb-stack-sm font-headline-md text-headline-md">{{ group.title }}</h3>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="item in group.items"
              :key="item"
              class="skill-tag cursor-default rounded-lg px-4 py-2 font-code text-code text-on-surface-variant"
            >
              {{ item }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
