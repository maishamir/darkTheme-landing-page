<script setup>
defineProps(['buttonText', 'buttonType']);
import arrowIcon from "@/assets/images/icon-arrow.svg";

</script>

<template>
    <div class="button">
        <button v-if="buttonType === 'button'" class="button--button">
            {{ buttonText }}
        </button>

        <a href="#" v-else-if="buttonType === 'link'" class="button--link">
            <p class="button--copy">{{ buttonText }}
                <span><img :src="arrowIcon" alt="" class="button--img"></span>
            </p>

        </a>
    </div>
</template>

<style lang="scss" scoped>
.button {
    &--button {
        @include tp4;
        color: white;
        padding: 1rem 5rem;
        width: 100%;
        border: none;
        border-radius: 1.5rem;
        background: $gradient;
        white-space: nowrap;
    }

    &--link {
        display: flex;
        color: $blue300;
        align-items: center;
        @include tp8;
        text-decoration: none;

    }

    &--copy {
        border-bottom: 1px solid $blue300;
    }

    &--img {
        height: 0.75rem;
        width: 0.75rem;

    }
}
</style>