<script setup>
import logo from "/images/logo.svg";
import locationIcon from "/images/icon-location.svg";
import phoneIcon from "/images/icon-phone.svg";
import emailIcon from "/images/icon-email.svg";
import fbIcon from "/images/icon-fb.png";
import xIcon from "/images/icon-x.png";
import instaIcon from "/images/icon-insta.png";

</script>

<template>
    <footer class="footer">
        <div class="footer__container">
            <img :src="logo" alt="" class="footer__logo">
            <div class="footer__info">
                <div class="footer__info-item">
                    <img :src="locationIcon" alt="" class="footer__info-icon">
                    <p class="footer__info-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua</p>
                </div>
                <div class="footer__info-item">
                    <img :src="phoneIcon" alt="" class="footer__info-icon">
                    <p class="footer__info-text">+1-543-123-4567</p>
                </div>
                <div class="footer__info-item">
                    <img :src="emailIcon" alt="" class="footer__info-icon">
                    <p class="footer__info-text">example@fylo.com</p>
                </div>
            </div>

            <div class="footer__links">
                <div class="footer__links-group">
                    <a href="#" class="footer__link">About Us</a>
                    <a href="#" class="footer__link">Jobs</a>
                    <a href="#" class="footer__link">Press</a>
                    <a href="#" class="footer__link">Blog</a>
                </div>
                <div class="footer__links-group">
                    <a href="#" class="footer__link">Contact Us</a>
                    <a href="#" class="footer__link">Terms</a>
                    <a href="#" class="footer__link">Privacy</a>
                </div>
            </div>

            <div class="footer__socials">
                <a href="#" class="footer__socials-link">
                    <img :src="fbIcon" alt="" class="footer__socials-icon">
                </a>
                <a href="#" class="footer__socials-link">
                    <img :src="xIcon" alt="" class="footer__socials-icon">
                </a>
                <a href="#" class="footer__socials-link">
                    <img :src="instaIcon" alt="" class="footer__socials-icon">
                </a>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
.footer {

    &__container {
        margin-top: 5.3rem;
        display: flex;
        flex-direction: column;
    }

    &__logo {
        height: 2rem;
        inline-size: 6.75rem;
        margin-bottom: 2.5rem;
    }

    &__info {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-bottom: 3.5rem;

        &-item {
            display: flex;
            gap: 1rem;
            align-items: baseline;
        }

        &-icon {
            height: 0.875rem;
        }

        &-text {
            @include tp7;
        }
    }

    &__links {
        display: flex;
        flex-direction: column;
        gap: 2.5rem;

        &-group {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            @include tp7;
        }

    }

    &__link {
        color: white;
        text-decoration: none;
    }

    &__socials {
        margin-top: 3rem;
        display: flex;
        justify-content: center;
        gap: 0.675rem;

        &-link {}

        &-icon {
            height: 1.5rem;
            width: 1.5rem;
        }
    }


}
</style>
