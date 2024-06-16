<template>
    <div>
        <div v-if="service" class="flex flex-col gap-[100px]">
            <Hero :title="service.title" />
            <Service :service="service" />
        </div>

        <div v-else class="flex flex-col gap-[100px]">
            <Hero title="Servicos" />
        </div>
    </div>
</template>
<script>
import Hero from 'src/components/common/Hero.vue';
import Service from 'src/components/pages/services/Service.vue';
import content from 'src/content.json';

export default {
    components: {
        Hero,
        Service
    },
    data() {
        return {
            service: null,
            content: content
        };
    },
    created() {
        const slug = this.$route.params.slug;
        if (slug) {
            this.fetchService(slug);
        }
    },
    methods: {
        fetchService(slug) {
            const service = this.content.generalServices.find(item => item.slug === slug);
            this.service = service || { title: 'Service Not Found', description: '' };
        }
    }
};
</script>
<style scoped>
/* Add any specific styles here */
</style>