<!-- pages/Home.vue -->
<template>
  <div class="flex flex-col gap-[100px]">
    <HeroSwiper />
    <Introduction />
    <About />
    <Testimonials /> 
    <Services />
    <!-- Add other sections of the home page here, e.g., <AboutSection />, <VideosSection />, <CTASection /> -->
  </div>
</template>

<script>
import HeroSwiper from 'src/components/pages/home/HeroSwiper.vue';
import Introduction from 'src/components/pages/home/Introduction.vue';
import About from 'src/components/pages/home/About.vue';
import Testimonials from 'src/components/pages/home/Testimonials.vue';
import Services from 'src/components/pages/home/Services.vue';
// Import other sections as needed
// import AboutSection from '@/components/home/AboutSection.vue';
// import VideosSection from '@/components/home/VideosSection.vue';
// import CTASection from '@/components/home/CTASection.vue';

export default {
  components: {
    HeroSwiper,
    Introduction,
    About,
    Testimonials,
    Services
    // AboutSection,
    // VideosSection,
    // CTASection,
  },
};
</script>

<style scoped>
/* Add any Home.vue specific styles here */
</style>
