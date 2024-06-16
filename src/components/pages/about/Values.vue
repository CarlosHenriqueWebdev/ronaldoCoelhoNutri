<template>
    <div class="flex flex-col gap-[32px] px-[24px] lg:px-[80px] mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px] ">
        <div>
            <TitleSection :subtitle="valuesText.subtitle" :title="valuesText.title" />
        </div>
        <ul class="flex flex-col gap-[64px] md:grid md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr] md:gap-x-[32px] md:gap-y-[64px] relative after:content-[''] after:absolute after:w-[56px] after:h-[56px] after:bg-no-repeat after:bg-contain after:right-0 after:top-[-10%] lg:after:top-[0px] lg:after:w-[116px] lg:after:h-[116px] lg:after:top-[85%] lg:after:right-[0%] detail6">
            <li v-for="(item, index) in listItems" :key="index" class="flex flex-col gap-[32px]">
                <img class="h-[240px] w-full object-cover shadow-image rounded-[4px] lg:h-[260px]" :src="require(`src/assets/images/${item.image}`)" alt="Logo">
                <TitleAndDescription :subtitleText="item.subtitle" :titleText="item.title" :descriptionText="item.description" withoutSpanVariant="withoutSpan" containerVariant="withoutBorder" styleVariant="subtitleVariant" />
            </li>
        </ul>
    </div>
</template>
<script>
import TitleSection from 'src/components/shared/TitleSection.vue';
import TitleAndDescription from 'src/components/shared/TitleAndDescription.vue';
import content from 'src/content.json';

export default {
    components: {
        TitleSection,
        TitleAndDescription
    },
    data() {
        return {
            // Extracting only the titles from the content.json file
            valuesText: content.aboutValues,
            listItems: content.aboutValues.valuesList
        };
    }
};
</script>
<style scoped>
/* You can add any additional styles here if needed */
</style>