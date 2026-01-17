<template>
  <header>
    <nav class="navbar">
      <div class="logo">Portfolio.</div>
      <ul class="nav-links" :class="{ active: isMenuOpen }">
        <li><a href="#home" :class="{ active: activeSection === 'home' }" @click="closeMenu">Home</a></li>
        <li><a href="#about" :class="{ active: activeSection === 'about' }" @click="closeMenu">About</a></li>
        <li><a href="#services" :class="{ active: activeSection === 'services' }" @click="closeMenu">Services</a></li>
        <li><a href="#projects" :class="{ active: activeSection === 'projects' }" @click="closeMenu">Projects</a></li>
        <li><a href="#contact" :class="{ active: activeSection === 'contact' }" @click="closeMenu">Contact</a></li>
      </ul>
      <div class="hamburger" @click="toggleMenu">
        <i class="fas fa-bars"></i>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isMenuOpen = ref(false)
const activeSection = ref('home')

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const updateActiveNav = () => {
  const sections = document.querySelectorAll('section')
  let current = ''

  sections.forEach(section => {
    const sectionTop = section.offsetTop
    if (window.scrollY >= sectionTop - 200) {
      current = section.getAttribute('id')
    }
  })

  activeSection.value = current
}

const handleScroll = () => {
  updateActiveNav()

  const header = document.querySelector('header')
  if (window.pageYOffset > 100) {
    if (header) header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)'
  } else {
    if (header) header.style.boxShadow = 'none'
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
