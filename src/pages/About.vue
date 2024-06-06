<template>
  <div>
    <swiper :loop="true" :autoplay="autoplay" :pagination="pagination">
      <swiper-slide v-for="(item, index) in items" :key="index">
        <div class="slide-text">{{ item.text }}</div>
      </swiper-slide>
      <!-- Add pagination here -->
      <div class="swiper-pagination"></div>
    </swiper>
  </div>
</template>

<script>
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { Autoplay, Pagination } from 'swiper';

// Install Swiper modules
SwiperCore.use([Autoplay, Pagination]);

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      items: [
        { text: 'Slide 1' },
        { text: 'Slide 2' },
        { text: 'Slide 3' },
      ],
      autoplay: {
        delay: 3000, // Delay in milliseconds
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    };
  },
};
</script>

<style>
.slide-text {
  text-align: center;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.swiper-pagination-bullet {
  background: #000;
}

.swiper-pagination-bullet-active {
  background: #007bff;
}
</style>
