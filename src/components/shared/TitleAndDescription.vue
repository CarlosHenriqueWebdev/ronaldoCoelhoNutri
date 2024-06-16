<template>
    <div class="flex flex-col gap-[16px]">
        <div :class="detailClass" class="relative">
            <TitleSection :subtitle="subtitleText" :title="titleText" :withoutSpanVariant="withoutSpanVariant" :containerVariant="containerVariant" :styleVariant="styleVariant" />
        </div>
        <TextSection :description="descriptionText" />
    </div>
</template>

<script>
import TitleSection from './TitleSection.vue';
import TextSection from './TextSection.vue';

export default {
    components: {
        TitleSection,
        TextSection,
    },
    props: {
        titleText: {
            type: String,
            required: true
        },
        subtitleText: {
            type: String,
            required: true
        },
        descriptionText: {
            type: String,
            required: true
        },
        detailVariant: {
            type: String
        },
        withoutSpanVariant: {
            type: String
        },
        containerVariant: {
            type: String
        },        
        styleVariant: {
            type: String
        }
    },
    computed: {
        detailClass() {
            return `${this.detailVariant}`;
        }
    }
};
</script>

<style scoped>
/* You can add any additional styles here if needed */
</style>
