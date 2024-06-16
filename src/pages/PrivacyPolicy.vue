<template>
    <div class="flex flex-col gap-[100px]">
        <Hero :title="privacyPolicy.title" />
        <div class="px-[24px] lg:px-[80px] mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px]">
            <div v-for="(section, index) in privacyPolicy.sections" :key="index" class="mb-8">
                <h2 class="text-xl font-semibold mb-2">{{ section.heading }}</h2>
                <p class="text-md text-gray-600 mb-4">{{ section.description }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import Hero from 'src/components/common/Hero.vue';
import content from 'src/content.json';

export default {
    components: {
        Hero
    },
    data() {
        return {
            privacyPolicy: content.privacyPolicy
        };
    }
}
</script>

<style scoped>
/* Add any specific styles here */
</style>
