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
                <div class="footer__info-item footer__info-location">
                    <img :src="locationIcon" alt="" class="footer__info-icon">
                    <p class="footer__info-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua</p>
                </div>
                <div class="footer__info-contact">
                    <div class="footer__info-item">
                        <img :src="phoneIcon" alt="" class="footer__info-icon">
                        <p class="footer__info-text">+1-543-123-4567</p>
                    </div>
                    <div class="footer__info-item">
                        <img :src="emailIcon" alt="" class="footer__info-icon">
                        <p class="footer__info-text">example@fylo.com</p>
                    </div>
                </div>
            </div>

            <!-- <div class="footer__links">
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
            </div> -->

            <div class="footer__link-socials">
                <div class="footer__links">
                    <a href="#" class="footer__link">About Us</a>
                    <a href="#" class="footer__link">Jobs</a>
                    <a href="#" class="footer__link">Press</a>
                    <a href="#" class="footer__link">Blog</a>
                    <a href="#" class="footer__link">Contact Us</a>
                    <a href="#" class="footer__link">Terms</a>
                    <a href="#" class="footer__link">Privacy</a>
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
        </div>
    </footer>
</template>

<style lang="scss" scoped>
.footer {
    height: 61rem;
    background-color: $navy950;
    padding: 1.5rem;
    position: relative;
    z-index: 1;
    position: relative;
    display: flex;
    flex-direction: column;

    @include tablet {
        padding: 3.5rem;
    }

    &__container {
        position: relative;
        top: 260px;

        @include tablet {}
    }

    &__logo {
        height: 2rem;
        inline-size: 6.75rem;
        margin-bottom: 2.5rem;
    }

    &__info {
        display: flex;
        flex-direction: column;
        gap: 6.875rem;
        margin-bottom: 3.5rem;

        @include tablet {
            flex-direction: row;
            justify-content: space-between;
        }

        &-location {
            @include tablet {
                // width: 75%;
                @include tp7;
                width: 80%;
            }
        }

        &-contact {
            display: flex;
            flex-direction: column;
            gap: 1rem;



            @include tablet {
                width: 50%;

                &.footer__info-item {
                    align-items: center;
                }
            }
        }



        &-item {
            display: flex;
            gap: 1rem;
            align-items: baseline;

            @include tablet {
                gap: 1.7rem;

            }


        }

        &-icon {
            height: 0.875rem;

            @include tablet {
                height: 1.5rem;
                width: 1.5rem;
            }
        }

        &-text {
            @include tp7;
        }
    }



    .footer__links {
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
        margin-bottom: 2.5rem;
        @include tp7;

        @media (min-width: 700px) {
            display: grid;
            // grid-template-columns: repeat(3, 1fr);
            grid-template-columns: min-content auto;
            grid-template-rows: repeat(3, min-content);
            white-space: nowrap;
            gap: 1rem 5rem;
            max-width: 700px;
            column-width: 5rem;


            // placing each link exactly
            .footer__link:nth-child(1) {
                grid-column: 1;
                grid-row: 1;
            }

            // About Us
            .footer__link:nth-child(2) {
                grid-column: 1;
                grid-row: 2;
            }

            // Jobs
            .footer__link:nth-child(3) {
                grid-column: 1;
                grid-row: 3;
            }

            // Press

            .footer__link:nth-child(4) {
                grid-column: 2;
                grid-row: 1;
            }

            // Blog
            .footer__link:nth-child(5) {
                grid-column: 2;
                grid-row: 2;
            }

            // Contact Us

            .footer__link:nth-child(6) {
                grid-column: 3;
                grid-row: 1;
            }

            // Terms
            .footer__link:nth-child(7) {
                grid-column: 3;
                grid-row: 2;
            }

            // Privacy
        }
    }


    &__link {
        color: white;
        text-decoration: none;
    }

    &__socials {
        display: flex;
        margin-top: 3rem;
        justify-content: center;
        gap: 0.675rem;

        @include tablet {
            margin-top: 0;
        }




        &-link {}

        &-icon {
            height: 1.5rem;
            width: 1.5rem;

            @include tablet {
                width: 2rem;
                height: 2rem;
            }
        }
    }


}

.footer__link-socials {
    display: flex;
    flex-direction: column;

    @include tablet {
        flex-direction: row;
        // width: 95%;
        gap: 7.875rem;
        // justify-content: space-between;
    }
}
</style>
