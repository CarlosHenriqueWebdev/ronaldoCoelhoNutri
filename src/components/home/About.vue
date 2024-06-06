<template>
    <div class="flex flex-col gap-[32px]">
        <div :style="{ backgroundImage: `url(${require(`src/assets/images/${about.backgroundImage}`)})` }" class="py-[80px] md:py-[0px] bg-right">
            <div class="px-[24px] py-[24px] lg:px-[80px] bg-midnight-blue shadow-lg flex flex-col gap-[16px] text-lavender-haze bg-gradient md:pt-[80px] md:pb-[148px]">
                <h2 class="text-[24px] font-bold uppercase">{{ about.sectionTitle }}</h2>
                <p class="text-[16px] md:max-w-[70%]">{{ about.sectionDescription }}</p>
            </div>
        </div>
        <div class="flex flex-col gap-[32px] px-[24px] lg:px-[80px] md:grid md:grid-cols-[1fr_2fr]">
            <div class="max-w-[500px] flex gap-[12px] sm:flex-row md:gap-[24px] md:max-w-full mt-[-90px] md:mt-[-140px] md:flex-col items-center">
                <img class="w-full h-full object-cover shadow-image rounded-[4px] object-top" :src="require(`../../assets/images/${about.profileImage}`)" alt="Profile Image">
                <ul class="flex flex-col md:flex-row gap-[8px] flex-wrap md:justify-center">
                    <li v-for="link in links" :key="link.name">
                        <a :href="link.href" target="_blank" class="cursor-pointer block h-[48px] w-[48px] hover:brightness-90">
                            <img :src="require(`../../assets/images/${link.icon}`)" alt="Logo" class="" />
                        </a>
                    </li>
                </ul>
            </div>
            <div class="flex flex-col gap-[32px]">
                <TitleAndDescription 
                    :subtitleText="about.subtitleText" 
                    :titleText="about.titleText" 
                    :descriptionText="about.descriptionText" 
                />
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
        about: content.aboutSection,
        links: content.socials
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