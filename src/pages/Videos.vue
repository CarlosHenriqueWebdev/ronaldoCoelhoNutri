<template>
    <div class="flex flex-col gap-[100px]">
        <Hero title="Videos" />
        <Videos />
    </div>
</template>
<script>
import Hero from 'src/components/common/Hero.vue';
import Videos from 'src/components/pages/videos/Videos.vue';

export default {
    components: {
        Hero,
        Videos,
    },
}
</script>
<style scoped>
/* Add any specific styles here */
</style>