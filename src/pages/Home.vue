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
import HeroSwiper from '../components/home/HeroSwiper.vue';
import Introduction from '../components/home/Introduction.vue';
import About from '../components/home/About.vue';
import Testimonials from '../components/home/Testimonials.vue';
import Services from '../components/home/Services.vue';
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
