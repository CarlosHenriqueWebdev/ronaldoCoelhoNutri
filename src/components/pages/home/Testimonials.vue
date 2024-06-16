<template>
    <div class="bg-midnight-blue text-lavender-haze">
        <swiper :loop="true" :autoplay="autoplay" :pagination="pagination" class="flex flex-col gap-[24px] mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px] pb-[60px]">
            <swiper-slide v-for="(item, index) in items" :key="index" class="px-[24px] pt-[60px] lg:px-[80px] select-none cursor-grab active:cursor-grabbing">
                <div class="flex flex-col gap-[16px] h-full justify-center md:text-center md:items-center">
                    <p class="text-[16px] md:max-w-[600px]">"{{ item.description }}"</p>
                    <span class="text-[14px] text-white-75">{{ item.name }}</span>
                </div>
            </swiper-slide>
            <div class="swiper-pagination swiper-pagination-testimonials !justify-start md:!justify-center px-[24px] lg:px-[80px]"></div>
        </swiper>
    </div>
</template>
<script>
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import content from 'src/content.json';

// Install Swiper modules
SwiperCore.use([Autoplay, Pagination]);

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            items: content.homeTestimonials,
            autoplay: {
                delay: 9000,
                disableOnInteraction: true,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        };
    },
};
</script>
<style scope>
    .swiper-wrapper {
        align-items: stretch;
        height: 100%;
    }

.swiper-pagination-testimonials {
	position: static !important;
}

.swiper-pagination-testimonials .swiper-pagination-bullet {
    border: 2.5px solid #E7E3E7 !important;
}

.swiper-pagination-testimonials .swiper-pagination-bullet-active {
    border-color: #57B957 !important;
}
</style>