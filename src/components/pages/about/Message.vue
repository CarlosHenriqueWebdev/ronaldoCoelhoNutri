<template>

        <div class="bg-midnight-blue">
            <div class="mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px] px-[24px] py-[80px] lg:px-[80px] flex flex-col gap-[32px] text-lavender-haze md:flex-row">
                <img class="w-[126px] h-[126px]" :src="require(`src/assets/images/detail5.png`)" alt="Logo">
                <TitleAndDescription :titleText="aboutText.title" :descriptionText="aboutText.description" withoutSpanVariant="withoutSpan" />
            </div>
        </div>
</template>
<script>
import content from 'src/content.json';
import TitleAndDescription from 'src/components/shared/TitleAndDescription.vue';

export default {
    components: {
        TitleAndDescription
    },
    data() {
        return {
            aboutText: content.aboutMessage
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