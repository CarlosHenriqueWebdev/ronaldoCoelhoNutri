<template>
    <div v-for="section in service.sections" :key="section.type">
        <component :is="getComponent(section.type)" :section="section" />
    </div>
</template>
<script>
import TitleSection from 'src/components/pages/services/dynamic-components/TitleSection.vue';
import ImageSection from 'src/components/pages/services/dynamic-components/ImageSection.vue';
import TextSection from 'src/components/pages/services/dynamic-components/TextSection.vue';
import ListSection from 'src/components/pages/services/dynamic-components/ListSection.vue';

export default {
    components: {
        TitleSection,
		ImageSection,
        TextSection,
        ListSection
    },
    props: {
        service: {
            type: Object,
            required: true
        }
    },
    methods: {
        getComponent(type) {
            const components = {
                title: 'TitleSection',
                image: 'ImageSection',
                text: 'TextSection',
                list: 'ListSection'
            };
            return components[type];
        }
    }
};
</script>