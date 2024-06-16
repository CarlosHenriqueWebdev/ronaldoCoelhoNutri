<template>
    <div class="mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px] flex flex-col gap-[32px] px-[24px] lg:px-[80px]">
        <div>
            <TitleSection :subtitle="servicesText.subtitle" :title="servicesText.title" />
        </div>

        <ul class="flex flex-col gap-[64px]">
            <li v-for="(item, index) in listItems" :key="index" class="flex flex-col gap-[32px] md:grid md:grid-cols-[1fr_2fr]">
                <img class="max-w-[320px] md:max-w-full w-full h-fit object-contain shadow-image rounded-[4px]" :src="require(`src/assets/images/${item.image}`)" alt="Logo">
                <div class="flex flex-col gap-[24px] md: py-[16px]">
                    <TitleAndDescriptionSub :subtitleText="item.subtitle" :titleText="item.title" :descriptionText="item.description" />
                    <div class="flex flex-col gap-[32px]">
                        <ul class="flex flex-col gap-[16px] text-black-75" :class="{ 'relative after:content-[\'\'] after:absolute after:w-[210px] after:h-[210px] after:bg-no-repeat after:bg-contain after:right-0 after:top-[50%] lg:after:w-[200px] lg:after:h-[200px] lg:after:top-[0px] md:after:w-[300px] md:after:h-[300px] detail3': index === 0 }">
                            <li v-for="(pro, index) in item.pros" :key="index" class="flex gap-[12px]">
                                <img class="w-[22px] h-[22px]" :src="require(`src/assets/images/vector2.svg`)" alt="Logo">
                                {{ pro }}
                            </li>
                        </ul>
                        <SecondaryButton :href="`/servicos/${item.slug}`">Saiba mais</SecondaryButton>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import TitleSection from 'src/components/shared/TitleSection.vue';
import TitleAndDescriptionSub from 'src/components/shared/TitleAndDescriptionSub.vue';
import content from 'src/content.json';
import SecondaryButton from 'src/components/common/SecondaryButton.vue';

export default {
    components: {
        TitleSection,
        TitleAndDescriptionSub,
        SecondaryButton
    },
    data() {
        return {
            // Extracting only the titles from the content.json file
            servicesText: content.homeServicesTitle,
            listItems: content.generalServices
        };
    }
};
</script>
<style scoped>
/* You can add any additional styles here if needed */
</style>