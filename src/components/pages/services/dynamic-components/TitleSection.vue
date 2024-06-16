<template>
    <div class="mt-[12px]"> 
        <TitleSection :subtitle="section.subtitle" :title="section.title" styleVariant="subtitleVariant" withoutSpanVariant="withoutSpan" />
    </div>
</template>
<script>
import TitleSection from 'src/components/shared/TitleSection.vue';

export default {
    components: {
        TitleSection
    },
    props: {
        section: {
            type: Object,
            required: true
        }
    }
};
</script>