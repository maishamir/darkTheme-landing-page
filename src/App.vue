<script setup>
import Button from './components/Button/Button.vue';
import Features from './components/Features/Features.vue';
import Footer from './components/Footer/Footer.vue';
import FyloBG from './components/FyloBG/FyloBG.vue';
import Hero from './components/Hero/Hero.vue';
import NavBar from './components/NavBar/NavBar.vue';
import SignupForm from './components/SignupForm/SignupForm.vue';
import Testimonials from './components/Testimonials/Testimonials.vue';
import wave from "/images/bg-curvy-mobile.svg";
</script>

<template>
  <main class="app">
    <div class="app__container">
      <NavBar />
      <Hero />
      <img :src="wave" alt="" class="wave">
      <div class="waveBg"></div>
      <Features />
      <FyloBG />
      <Testimonials />
      <SignupForm />
    </div>
    <Footer />
  </main>
</template>

<style lang="scss" scoped>
.app {
  position: relative;
  background-color: $navy850;

  &__container {
    padding: 1.5rem;

    @include tablet {
      padding: 5rem 3.5rem;
    }
  }

  color: white;

  .wave {
    position: absolute;
    left: 0;
    right: 0;
    top: 17.5rem;
    z-index: 0;
    width: 100%;
  }

  .waveBg {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 26rem;
    z-index: 0;
    background-color: $navy900;
  }
}
</style>
