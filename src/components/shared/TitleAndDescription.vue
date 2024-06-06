<template>
    <div class="flex flex-col gap-[16px]">
        <div :class="detailClass" class="relative">
            <TitleSection :subtitle="subtitleText" :title="titleText" />
        </div>
        <div class="flex flex-col gap-[16px] text-[16px]">
            <TextSection :description="descriptionText" />
        </div>
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
            type: String,
            default: 'detail1' // Default variant
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
