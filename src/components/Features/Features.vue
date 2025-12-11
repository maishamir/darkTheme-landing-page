<script setup>
import featureData from "@/assets/data/featureData.json";
import Feature from "../Feature/Feature.vue";
</script>
<template>
    <section class="features">
        <Feature v-for="feature in featureData" :feature-img="feature.featureImg" :feature-title="feature.featureTitle"
            :feature-copy="feature.featureCopy" />
    </section>
</template>
<style lang="scss" scoped>
    .features {
        display: flex;
        flex-direction: column;
        gap: 5rem;
        margin-top: 8.75rem;
    }
</style>