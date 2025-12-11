<script setup>
import heroImg from "/images/illustration-intro.png";
import wave from "/images/bg-curvy-mobile.svg";
import Button from "../Button/Button.vue";
</script>
<template>
    <section class="hero">
        <img :src="heroImg" alt="" class="hero__img">

        <div class="hero__body">
            <h2 class="hero__heading">
                All your files in one secure location, accessible anywhere.
            </h2>
            <p class="hero__copy">
                Fylo stores all your most important files in one secure location. Access them wherever you need, share
                and collaborate with friends, family, and co-workers.
            </p>
            <Button button-text="Get Started" button-type="button" />
        </div>
    </section>
</template>
<style lang="scss" scoped></style>