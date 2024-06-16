<template>
    <div class="lg:hidden">
        <div v-if="items.length > 0">
            <div :style="{ backgroundImage: `url(${require(`src/assets/images/${items[0].backgroundImage}`)})` }" class="py-[80px] bg-right">
                <div class="lg:px-[80px] bg-white-75 text-forest-night uppercase shadow-lg">             
                <div class="mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px] flex flex-col gap-[24px] p-[24px]">
                    <div class="flex flex-col gap-[16px] font-extrabold">
                        <span class="text-[20px]">{{ items[0].subtitle }}</span>
                        <h1 class="text-[28px]">{{ items[0].title }}</h1>
                        <p class="text-[16px]">{{ items[0].description }}</p>
                    </div>

                     <PrimaryButton :href="`${items[0].url}`">{{ items[0].button }}</PrimaryButton>
                </div>
                </div>
            </div>
        </div>
    </div>
    <div class="hidden lg:block">
        <swiper :loop="true" :autoplay="autoplay" :pagination="pagination">
            <swiper-slide v-for="(item, index) in items" :key="index">
                <div :style="{ backgroundImage: `url(${require(`src/assets/images/${item.backgroundImage}`)})` }" class="py-[132px] bg-right h-full select-none cursor-grab active:cursor-grabbing">
                    <div class="px-[80px] text-forest-night uppercase flex flex-col gap-[24px] mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px]">
                        <div class="flex flex-col gap-[16px] font-extrabold">
                            <span class="text-[20px]">{{ item.subtitle }}</span>
                            <h1 class="text-[28px]">{{ item.title }}</h1>
                            <p class="text-[16px]">{{ item.description }}</p>
                        </div>

          <template v-if="item['button-type'] === 'primary'">
            <PrimaryButton :href="`${item['url']}`">{{ item.button }}</PrimaryButton>
          </template>
          <template v-else>
            <SecondaryButton :href="`${item['url']}`">{{ item.button }}</SecondaryButton>
          </template>
                    </div>
                </div>
            </swiper-slide>
            <div class="swiper-pagination"></div>
        </swiper>
    </div>
</template>

<script>
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import content from 'src/content.json';
import PrimaryButton from 'src/components/common/PrimaryButton.vue';
import SecondaryButton from 'src/components/common/SecondaryButton.vue';

// Install Swiper modules
SwiperCore.use([Autoplay, Pagination]);

export default {
    components: {
        Swiper,
        SwiperSlide,
        PrimaryButton,
        SecondaryButton,
    },
    data() {
        return {
            items: content.homeHero,
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
        height: 444px;
    }
</style>