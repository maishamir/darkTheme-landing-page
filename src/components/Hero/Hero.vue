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
<style lang="scss" scoped>
    .hero {
        position: relative;
        z-index: 2;
        margin-top: 3rem;

        &__img {
            width: 100%;
            margin-bottom: 4.5rem;
        }

        &__body {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            align-items: center;
            text-align: center;

        }

        &__heading {
            @include tp2;
        }

        &__copy {
            @include tp8;
        }
        
    }
</style>