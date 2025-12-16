<script setup>
import Button from "../Button/Button.vue";
import productiveImg from "/images/illustration-stay-productive.png";
</script>
<template>
    <section class="fyloBG">
        <img :src="productiveImg" alt="" class="fyloBG__img">
        <div class="fyloBG__body">
            <p class="fyloBG__title">Stay productive, where you are</p>
            <div class="fyloBG__copy">
                <p class="fyloBG__info">Never let location be an issue when accessing your files. Fylo has you covered
                    for all of your file storage needs.</p>
                <p class="fyloBG__info">Securely share files and folders with friends, family and colleagues for live
                    collaboration. No email attachments required</p>
            </div>
            <Button button-text="See how Fylo works" button-type="link" />
        </div>
    </section>
</template>

<style lang="scss" scoped>
.fyloBG {
    position: relative;
    z-index: 2;

    @include tablet {}

    &__img {
        width: 100%;
        margin-top: 10rem;
        margin-bottom: 3rem;

        @include tablet {
            width: 95%;
            display: block;
            margin-left: auto;
            margin-right: auto;

        }
    }

    &__body {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    &__title {
        @include tp3-bold;
    }

    &__copy {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        @include tp8;
    }

    &__info {}
}
</style>