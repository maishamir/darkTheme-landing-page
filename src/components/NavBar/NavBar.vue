<script setup>
// defineProps([])
import logo from "@/assets/images/logo.svg";
</script>

<template>
    <nav class="main-nav">
        <img :src="logo" alt="" class="main-nav__logo">
        <ul class="main-nav__list">
            <li class="main-nav__link">Features</li>
            <li class="main-nav__link">Team</li>
            <li class="main-nav__link">Sign In</li>
        </ul>
    </nav>
</template>

<style lang="scss" scoped>
.main-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__logo {
        width: 5rem;
    }

    &__list {
        list-style-type: none;
        display: flex;
        gap: 1.5rem;
        @include tp5;
    }
}
</style>