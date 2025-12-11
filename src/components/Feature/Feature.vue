<script setup>
defineProps([
    'featureImg',
    'featureTitle',
    'featureCopy'
])
</script>
<template>
    <div class="feature">
        <img :src="featureImg" alt="" class="feature__img">
        <div class="feature__body">
            <p class="feature__title">{{ featureTitle }}</p>
            <p class="feature__copy">{{ featureCopy }}</p>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.feature {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    &__img {
        height: 75%;
        width: auto;
        margin-bottom: 2.5rem
    }

    &__body {
        display: flex;
        flex-direction: column;

        gap: 0.5rem
    }


    &__title {
        @include tp2;
    }

    &__copy {
        @include tp8;
    }
}
</style>
