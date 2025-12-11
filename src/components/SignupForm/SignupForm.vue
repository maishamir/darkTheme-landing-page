<script setup>
import Button from '../Button/Button.vue';

</script>
<template>
    <div class="signupForm">
        <div class="signupForm__body">
            <h1 class="signupForm__title">
                Get early access today
            </h1>
            <p class="signupForm__copy">
                It only takes a minute to sign up and our free starter tier is extremely generous. If you have any
                questions, our support team would be happy to help you.
            </p>
        </div>

        <form action="" class="signupForm__form">
            <label for="email" hidden>Enter your email</label>
            <input type="email" placeholder="email@example.com" name="email" id="email">
            <Button button-type="button" button-text="Get Started For Free" />
        </form>
    </div>
</template>
<style lang="scss" scoped>
.signupForm {
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 2.5rem 1.5rem;
    background-color: $navy850;
    border-radius: 0.625rem;
    box-shadow: 5px 5px 8px 0px rgba(0, 0, 0, 0.25);


    &__body {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-bottom: 2rem
    }

    &__title {
        @include tp2;
    }


    &__copy {
        @include tp8;
    }

    &__form {
        display: flex;
        flex-direction: column;

        input {
            text-align: center;
            border: none;
            @include tp8;
            padding: 0.875rem;
            border-radius: 1.5rem;
            margin-bottom: 1.5rem;
            // width: 100%;


            &::placeholder {
                color: $gray400;
            }
        }
    }
}
</style>