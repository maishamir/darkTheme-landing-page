<script setup>
import Button from './components/Button/Button.vue';
import NavBar from './components/NavBar/NavBar.vue';
</script>

<template>
  <main class="app">
    <NavBar />
    <Button button-type="button" button-text="Get Started" />
    <Button button-type="link" button-text="See how Fylo works" />
  </main>
</template>

<style lang="scss" scoped>
.app {
  background-color: $navy950;
}
</style>
