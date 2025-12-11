<script setup>
    import logo from "@/assets/images/logo.svg";
    import locationIcon from "@/assets/images/icon-location.svg";
    import phoneIcon from "@/assets/images/icon-phone.svg";
    import emailIcon from "@/assets/images/icon-email.svg";
    import fbIcon from "@/assets/images/icon-fb.png";
    import xIcon from "@/assets/images/icon-x.png";
    import instaIcon from "@/assets/images/icon-insta.png";

</script>

<template>
    <footer class="footer">
        <div class="footer__container">
            <img :src="logo" alt="" class="footer__logo">
            <div class="footer__info">
                <div class="footer__info-item">
                    <img :src="locationIcon" alt="" class="footer__info-icon">
                    <p class="footer__info-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
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
                    <a href="" class="footer__link">About Us</a>
                    <a href="" class="footer__link">Jobs</a>
                    <a href="" class="footer__link">Press</a>
                    <a href="" class="footer__link">Blog</a>
                </div>
                <div class="footer__links-group">
                    <a href="" class="footer__link">Contact Us</a>
                    <a href="" class="footer__link">Terms</a>
                    <a href="" class="footer__link">Privacy</a>
                </div>
            </div>

            <div class="footer__socials">
                <a href="" class="footer__social-link">
                    <img :src="fbIcon" alt="">
                </a>
                <a href="" class="footer__social-link">
                    <img :src="xIcon" alt="">
                </a>
                <a href="" class="footer__social-link">
                    <img :src="instaIcon" alt="">
                </a>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped></style>
