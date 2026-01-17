<template>
  <section id="contact" class="contact">
    <h2 class="section-title">Contact <span class="highlight">Me!</span></h2>
    <div class="contact-container">
      <div class="contact-info">
        <div v-for="info in contactInfo" :key="info.id" class="contact-item">
          <i :class="info.icon"></i>
          <div>
            <h4>{{ info.title }}</h4>
            <p>{{ info.value }}</p>
          </div>
        </div>
      </div>
      <form class="contact-form" @submit.prevent="handleSubmit">
        <div class="form-row">
          <input v-model="formData.name" type="text" placeholder="Your Name" required>
          <input v-model="formData.email" type="email" placeholder="Your Email" required>
        </div>
        <input v-model="formData.subject" type="text" placeholder="Subject" required>
        <textarea v-model="formData.message" placeholder="Your Message" rows="5" required></textarea>
        <button type="submit" class="btn-primary" :disabled="isSubmitting">
          <i :class="buttonIcon"></i> {{ buttonText }}
        </button>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const contactInfo = ref([
  {
    id: 1,
    icon: 'fas fa-envelope',
    title: 'Email',
    value: 'Minaokenzen344@gmail.com'
  },
  {
    id: 2,
    icon: 'fas fa-phone',
    title: 'Phone',
    value: '+639317741933'
  },
  {
    id: 3,
    icon: 'fas fa-map-marker-alt',
    title: 'Status',
    value: 'Computer Science - 1st Year'
  }
])

const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const isSuccess = ref(false)

const buttonText = computed(() => {
  if (isSubmitting.value) return 'Sending...'
  if (isSuccess.value) return 'Message Sent!'
  return 'Send Message'
})

const buttonIcon = computed(() => {
  if (isSubmitting.value) return 'fas fa-spinner fa-spin'
  if (isSuccess.value) return 'fas fa-check'
  return 'fas fa-paper-plane'
})

const handleSubmit = () => {
  isSubmitting.value = true

  setTimeout(() => {
    isSubmitting.value = false
    isSuccess.value = true

    setTimeout(() => {
      isSuccess.value = false
      formData.value = {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    }, 2000)
  }, 1500)
}
</script>
