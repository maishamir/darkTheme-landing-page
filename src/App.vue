<script setup>
import Button from './components/Button/Button.vue';
import Footer from './components/Footer/Footer.vue';
import Hero from './components/Hero/Hero.vue';
import NavBar from './components/NavBar/NavBar.vue';
import SignupForm from './components/SignupForm/SignupForm.vue';
import Testimonials from './components/Testimonials/Testimonials.vue';
import TestimonyCard from './components/TestimonyCard/TestimonyCard.vue';
import profileImg from "@/assets/images/profile-1.jpg";
</script>

<template>
  <main class="app">
    <NavBar />
    <Hero />
    <!-- <Button button-type="button" button-text="Get Started" />
    <Button button-type="link" button-text="See how Fylo works" /> -->

    <!-- <TestimonyCard
      card-copy="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
      :user-img="profileImg" user-name="Satish Patel" user-role="Founder & CEO" user-company="Huddle" /> -->

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
