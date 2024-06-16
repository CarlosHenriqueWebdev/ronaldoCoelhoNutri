<template>
    <div class="flex flex-col gap-[32px] px-[24px] lg:px-[80px] mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px] ">
        <div>
            <TitleSection :subtitle="servicesText.subtitle" title="Equipe de Profissionais" />
        </div>
        <ul class="flex flex-col gap-[64px] sm:grid sm:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr] sm:gap-x-[32px] sm:gap-y-[64px] relative after:content-[''] after:absolute after:w-[98px] after:h-[98px] after:bg-no-repeat after:bg-contain after:left-[-24px] after:top-[-2%] lg:after:w-[216px] lg:after:h-[216px] lg:after:top-[-10%] lg:after:left-[-10%] detail7">
            <li v-for="(item, index) in listItems" :key="index" class="flex flex-col gap-[32px]">
                <img style="object-position: top;" class="w-full h-fit object-cover shadow-image rounded-[4px] h-[240px]" :src="require(`src/assets/images/${item.image}`)" alt="Logo">
                <div class="flex justify-between">
                    <div class="flex flex-col gap-[8px]">
                        <h3 class="text-[20px] font-bold uppercase">{{ item.name }}</h3>
                        <span class="text-[14px] text-black-75">{{ item.role }}</span>
                    </div>
                    <a :href="item.socialLink" target="_blank" class="block hover:brightness-75">               	
                    <img class="w-[40px] h-[40px]" :src="require(`src/assets/images/vector7.svg`)" alt="Logo">
                    </a>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import TitleSection from 'src/components/shared/TitleSection.vue';
import content from 'src/content.json';

export default {
    components: {
        TitleSection
    },
    data() {
        return {
            // Extracting only the titles from the content.json file
            servicesText: content.homeServicesTitle,
            listItems: content.aboutMeetOurTeam
        };
    }
};
</script>
<style scoped>
/* You can add any additional styles here if needed */
</style>