<template>
    <div class="flex flex-col gap-[32px] px-[24px] lg:px-[80px] mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px] w-full">
        <div class="relative after:content-[''] after:absolute after:w-[80px] after:h-[80px] after:bg-no-repeat after:bg-contain after:right-0 after:top-[-24px] lg:after:top-[0px] lg:after:w-[205px] lg:after:h-[205px] lg:after:top-[-50px] lg:after:right-[-50px] detail9">
            <TitleSection :subtitle="videosText.subtitle" :title="videosText.title" />
        </div>
        <ul class="flex flex-col gap-[64px] sm:grid sm:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr] sm:gap-x-[32px] sm:gap-y-[64px] w-full">
            <li v-for="(item, index) in listItems" :key="index" class="w-full flex flex-col gap-[16px] h-fit">
                <div class="w-full h-full">               
                <iframe :src="item.videoEmbeddedURL" class="shadow-image w-full h-[240px] rounded-[4px] block" frameborder="0" allowfullscreen></iframe>
                </div>
                
                      <div class="flex flex-col gap-[8px] uppercase font-bold">
                        <h3 class="text-[18px]">{{ item.title }}</h3>
                        <span class="text-[14px] text-vibrant-green">{{ item.lengthAndDate }}</span>
                    </div>
            </li>
        </ul>
    </div>
</template>
<script>
import TitleSection from 'src/components/shared/TitleSection.vue';
import content from 'src/content.json';

export default {
    components: {
        TitleSection
    },
    data() {
        return {
            videosText: content.videos,
            listItems: content.videos.videosList
        };
    }
};
</script>
<style scoped>
/* Add any specific styles here */
.video-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
  background: #000;
  border-radius: 4px;
}

.video-iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}
</style>