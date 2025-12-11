<script setup>
import Button from './components/Button/Button.vue';
import Features from './components/Features/Features.vue';
import Footer from './components/Footer/Footer.vue';
import Hero from './components/Hero/Hero.vue';
import NavBar from './components/NavBar/NavBar.vue';
import SignupForm from './components/SignupForm/SignupForm.vue';
import Testimonials from './components/Testimonials/Testimonials.vue';
</script>

<template>
  <main class="app">
    <NavBar />
    <Hero />
    <Features />
    <Testimonials />
    <SignupForm />
    <Footer />
  </main>
</template>

<style lang="scss" scoped>
.app {
  padding: 1.5rem;
  color: white;
}
</style>
