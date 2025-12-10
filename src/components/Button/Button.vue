<script setup>
defineProps(['buttonText', 'buttonType'])
import arrowIcon from "@/assets/images/icon-arrow.svg";

</script>

<template>
    <div class="button">
        <button v-if="buttonType === 'button'" class="button--button">
            {{ buttonText }}
        </button>

        <a href="#" v-else-if="buttonType === 'link'">
            <p class="button--link">{{ buttonText }}</p>
            <img :src="arrowIcon" alt="">
        </a>
    </div>
</template>

<style lang="scss" scoped></style>