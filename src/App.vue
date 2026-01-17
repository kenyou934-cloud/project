<template>
  <div id="app">
    <Header />
    <main>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Services from './components/Services.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

onMounted(() => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate')
      }
    })
  }, observerOptions)

  const animateElements = document.querySelectorAll(
    '.hero-text, .hero-image, .about-image, .about-text, .service-card, .project-card, .contact-info, .contact-form'
  )

  animateElements.forEach(el => {
    el.style.opacity = '0'
    el.style.transform = 'translateY(30px)'
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
    observer.observe(el)
  })

  const style = document.createElement('style')
  style.textContent = `
    .animate {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
  `
  document.head.appendChild(style)
})
</script>
