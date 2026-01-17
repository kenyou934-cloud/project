<template>
  <section id="home" class="hero">
    <div class="hero-content">
      <div class="hero-text" ref="heroText">
        <p class="greeting">Hello, It's Me</p>
        <h1 class="name" ref="nameElement">Kenzen L. Miñao</h1>
        <h2 class="title">And I'm a <span class="highlight">Game Developer</span></h2>
        <p class="description">
          Passionate game developer specializing in Roblox game development. I create immersive gaming experiences that captivate players and bring creative visions to life.
        </p>
        <div class="social-links">
          <a href="mailto:Minaokenzen344@gmail.com" class="social-icon"><i class="fas fa-envelope"></i></a>
          <a href="https://www.roblox.com/users/profile" target="_blank" class="social-icon"><i class="fas fa-gamepad"></i></a>
          <a href="#" class="social-icon"><i class="fab fa-discord"></i></a>
        </div>
        <a href="#contact" class="btn-primary">Contact Me</a>
      </div>
      <div class="hero-image" ref="heroImage">
        <div class="hexagon-wrapper" ref="hexagonWrapper">
          <div class="hexagon">
            <div class="hexagon-inner">
              <img src="/ken.jpg" alt="Kenzen L. Miñao">
            </div>
          </div>
          <div class="hexagon-glow" ref="hexagonGlow"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const nameElement = ref(null)
const hexagonGlow = ref(null)
const heroText = ref(null)
const heroImage = ref(null)

const typeWriter = (element, text, speed = 100) => {
  let i = 0
  element.innerHTML = ''

  const type = () => {
    if (i < text.length) {
      element.innerHTML += text.charAt(i)
      i++
      setTimeout(type, speed)
    }
  }
  type()
}

onMounted(() => {
  setTimeout(() => {
    if (nameElement.value) {
      const originalName = nameElement.value.textContent
      typeWriter(nameElement.value, originalName, 80)
    }
  }, 500)

  if (hexagonGlow.value) {
    document.addEventListener('mousemove', (e) => {
      const rect = hexagonGlow.value.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2

      hexagonGlow.value.style.transform = `translate(${x * 0.02}px, ${y * 0.02}px)`
    })
  }
})
</script>
