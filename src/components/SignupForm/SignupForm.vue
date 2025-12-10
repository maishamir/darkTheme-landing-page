<script setup>
import Button from '../Button/Button.vue';

</script>
<template>
    <div class="signupForm">
        <h1 class="signupForm__title">
            Get early access today
        </h1>
        <p class="signupForm__copy">
            It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.
        </p>

        <form action="" class="signupForm__form">
            <label for="email" hidden>Enter your email</label>
            <input type="email" placeholder="email@example.com" name="email" id="email">
            <Button button-type="button" button-text="Get Started For Free" />
        </form>
    </div>
</template>
<style lang="scss" scoped>
</style>