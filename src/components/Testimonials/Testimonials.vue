<script setup>
import testimonialData from '@/assets/data/testimonialData.json';
import TestimonyCard from '../TestimonyCard/TestimonyCard.vue';
import bgQuotes from "/images/bg-quotes.png"
</script>
<template>
    <section class="testimonials">
        <img :src="bgQuotes" alt="" class="testimonials__img">
        <TestimonyCard v-for="testimony in testimonialData" :card-copy="testimony.cardCopy"
            :user-img="testimony.userImg" :user-name="testimony.userName" :user-role="testimony.userRole"
            :user-company="testimony.userCompany" />
    </section>
</template>

<style lang="scss" scoped>
.testimonials {
    position: relative;
    z-index: 2;
    margin: 9rem 0 0 0;


    @include tablet {
        width: 65vw;
        margin-left: auto;
        margin-right: auto;
        margin-top: 4.5rem;

    }

    &__img {
        width: 2rem;
        position: absolute;
        top: -1.5rem;
        z-index: -1;
        left: 0.5rem;

        @include tablet {
            width: 3.5rem;
            // height: auto;
            top: -2rem;
            left: -0.75rem;
        }
    }

    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}
</style>