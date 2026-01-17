<template>
  <section id="projects" class="projects">
    <h2 class="section-title">Latest <span class="highlight">Projects</span></h2>
    <div class="projects-grid">
      <div v-for="project in projects" :key="project.id" class="project-card">
        <div class="project-image">
          <img :src="project.image" :alt="project.title">
          <div class="project-overlay">
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <a :href="project.link" target="_blank" class="project-link">
              <i class="fas fa-external-link-alt"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const projects = ref([
  {
    id: 1,
    title: 'Spuid Game',
    description: 'Survive the game to win money!',
    image: '/spuid game.webp',
    link: 'https://www.roblox.com/games/124740893103766/Spuid-Game'
  },
  {
    id: 2,
    title: 'Survival Nights',
    description: 'Survive the darkness until morning!',
    image: '/survival.png',
    link: 'https://www.roblox.com/games/123380312019450/Survival-Nights'
  },
  {
    id: 3,
    title: 'REDZONE BETA',
    description: 'Battle for control and dominate!',
    image: '/redzone.png',
    link: 'https://www.roblox.com/games/136999271904626/REDZONE-BETA-UPDATE-v2-5'
  }
])
</script>
