<template>
    <div class="flex flex-col gap-[32px]">
        <div :style="{ backgroundImage: `url(${require(`src/assets/images/${about.backgroundImage}`)})` }" class="py-[80px] md:py-[0px] bg-right bg-fixed">
            <div class="bg-midnight-blue bg-gradient">
                
            <div class="mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px] px-[24px] py-[24px] lg:px-[80px] shadow-lg flex flex-col gap-[16px] text-lavender-haze md:pt-[80px] md:pb-[148px]">
                <h2 class="text-[24px] font-bold uppercase">{{ about.sectionTitle }}</h2>
                <p class="text-[16px] md:max-w-[70%]">{{ about.sectionDescription }}</p>
            </div>
            </div>
        </div>
        <div class="mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px] flex flex-col gap-[32px] px-[24px] lg:px-[80px] md:grid md:grid-cols-[1fr_2fr]">
            <div class="flex gap-[12px] sm:flex-row md:gap-[24px] mt-[-90px] md:mt-[-140px] md:flex-col items-center">
                <img class="object-contain h-fit max-w-[320px] md:max-w-full w-full shadow-image rounded-[4px] object-top" :src="require(`src/assets/images/${about.profileImage}`)" alt="Profile Image">
                <ul class="flex flex-col md:flex-row gap-[8px] flex-wrap md:justify-center">
                    <li v-for="link in links" :key="link.name">
                        <a :href="link.href" target="_blank" class="cursor-pointer block hover:brightness-90">
                            <img :src="require(`src/assets/images/${link.icon}`)" alt="Logo" class="h-[48px] w-[48px]" />
                        </a>
                    </li>
                </ul>
            </div>
            <div class="flex flex-col gap-[32px]">
                <div class="relative after:content-[''] after:absolute after:w-[90px] after:h-[90px] after:bg-no-repeat after:bg-contain after:right-0 after:top-[60px] lg:after:w-[120px] lg:after:h-[120px] lg:after:top-[0px] lg:after:w-[190px] lg:after:h-[190px] lg:after:top-[0%] lg:after:right-[10%] detail2">                   
                <TitleAndDescription 
                    :subtitleText="about.subtitleText" 
                    :titleText="about.titleText" 
                    :descriptionText="about.descriptionText"
                />
                </div>
                <PrimaryButton :href="about.buttonUrl">{{ about.buttonText }}</PrimaryButton>
            </div>
        </div>
    </div>
</template>

<script>
import TitleAndDescription from 'src/components/shared/TitleAndDescription.vue';
import PrimaryButton from 'src/components/common/PrimaryButton.vue';
import content from 'src/content.json';

export default {
    components: {
        PrimaryButton,
        TitleAndDescription
    },
    data() {
    return {
        about: content.homeAbout,
        links: content.homeSocials
    };
}
};
</script>

<style scoped>
@media (min-width: 768px) {
    .bg-gradient {
        background: linear-gradient(90deg, #171B27 0%, rgba(23, 27, 39, 0.95) 50%, rgba(23, 27, 39, 0) 100%) !important;
    }
}
</style>