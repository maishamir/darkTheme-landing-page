<script setup>
defineProps(["cardCopy", "userImg", "userName", "userRole", "userCompany"])
</script>

<template>
    <div class="card">
        <div class="card__body">
            <p class="card__copy">
                {{ cardCopy }}
            </p>
        </div>

        <footer class="card__footer">
            <img :src="userImg" :alt="userName" class="card__img">

            <div class="card__userDeets">
                <p class="card__username">
                    {{ userName }}
                </p>
                <small class="card__role-company">
                    {{ userRole }}, {{ userCompany }}
                </small>
            </div>
        </footer>
    </div>
</template>

<style lang="scss">
.card {
    background-color: $navy800;
    padding: 1.5rem !important;
    border-radius: 0.25rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @include tablet {
        padding: 2.5rem !important;
        @include tablet{
            width: 100%;
        }
    }

    &__body {
        @include tp9;

        @include tablet {
            @include tp8;
        }
    }

    &__copy {}

    &__footer {
        display: flex;
        gap: 0.5rem;
        align-items: center;
    }

    &__img {
        height: 1.5rem;
        border-radius: 50%;
    }

    &__userDeets {
        display: flex;
        flex-direction: column;
    }


    &__username {
        @include tp9-bold;
    }

    &__role-company {
        @include tp10;
    }
}
</style>