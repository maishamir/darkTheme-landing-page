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
    
</style>