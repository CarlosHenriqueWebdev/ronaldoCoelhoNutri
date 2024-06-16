<template>
    <div class="flex flex-col gap-[32px] mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px]">
        <div class="px-[24px] lg:px-[80px]">
            <TitleSection :subtitle="text.mainSubtitle" :title="text.mainTitle" />
        </div>
        <div class="px-[24px] lg:px-[80px] flex flex-col gap-[32px] md:grid md:grid-cols-[470fr_618fr]">
            <div class="flex md:justify-end h-fit lg:h-full">
                <div class="w-full shadow-container rounded-[4px] lg:h-full">
                    <img class="h-[240px] w-full object-cover shadow-image rounded-[4px] lg:h-full lg:object-cover" :src="require(`src/assets/images/${text.image}`)" alt="Logo">
                </div>
            </div>
            <div class="flex flex-col gap-[16px] md:pt-[16px] lg:pb-[140px]">
                <div class="relative after:content-[''] after:absolute after:w-[150px] after:h-[150px] after:bg-no-repeat after:bg-contain after:right-0 after:top-[60px] lg:after:w-[200px] lg:after:h-[200px] lg:after:top-[0px] lg:after:w-[365px] lg:after:h-[365px] lg:after:top-[50%] lg:after:right-[10%] detail4">
                    <TitleSection :subtitle="text.titleSection.subtitle" :title="text.titleSection.title" styleVariant="subtitleVariant" containerVariant="withoutBorder" />
                </div>
                <div class="flex flex-col gap-[16px] text-[16px]">
                    <p>{{ text.textSection[0] }}</p>
                    <p>{{ text.textSection[1] }}</p>
                    <p>{{ text.textSection[2] }}</p>
                </div>
            </div>
        </div>
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
            text: content.aboutIntroduction
        };
    }
};
</script>