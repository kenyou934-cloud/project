<template>
  <section id="services" class="services">
    <h2 class="section-title">Our <span class="highlight">Services</span></h2>
    <div class="services-grid">
      <div v-for="service in services" :key="service.id" class="service-card">
        <div class="service-icon">
          <i :class="service.icon"></i>
        </div>
        <h3>{{ service.title }}</h3>
        <p>{{ service.description }}</p>
        <a href="#projects" class="read-more">Read More <i class="fas fa-arrow-right"></i></a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const services = ref([
  {
    id: 1,
    icon: 'fas fa-gamepad',
    title: 'Game Development',
    description: 'Creating immersive and engaging Roblox games with unique gameplay mechanics and stunning visuals.'
  },
  {
    id: 2,
    icon: 'fas fa-paint-brush',
    title: 'Game Design',
    description: 'Designing captivating game worlds, mechanics, and player experiences that keep users engaged.'
  }
])
</script>
