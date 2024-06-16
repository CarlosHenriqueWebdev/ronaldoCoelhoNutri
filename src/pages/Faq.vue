<template>
    <div class="flex flex-col gap-[100px] overflow-hidden">
        <Hero title="FAQ" />

        <div class="w-full flex flex-col gap-[32px] px-[24px] lg:px-[80px] mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px] relative after:content-[''] after:absolute after:w-[200px] after:h-[200px] after:bg-no-repeat after:bg-contain after:right-0 after:top-[-24px] lg:after:top-[0px] lg:after:w-[230px] lg:after:h-[230px] lg:after:top-[-50px] lg:after:right-[24px] detail8">
            <TitleSection subtitle="Questions" title="FAQ (Perguntas Frequentes)" />
            <ul class="flex flex-col gap-[16px]">
                <li v-for="(item, index) in listItems" :key="item.question" class="cursor-pointer flex flex-col gap-[16px] text-lavender-haze bg-[#262931] p-[24px] text-[16px] rounded-[4px]">
                    <div class="flex w-full items-center justify-between hover:brightness-75" :class="activeIndexes.includes(index) ? 'border-solid border-b-[1px] border-misty-sky pb-[8px]' : ''" @click="toggleAnswer(index)">
                        <h3 class="w-fit uppercase font-bold">{{ item.question }}</h3>
                        <img class="h-[12px]" :src="require(`src/assets/images/vector8.svg`)" alt="Logo">
                    </div>
                    <p v-if="activeIndexes.includes(index)">{{ item.answer }}</p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import Hero from 'src/components/common/Hero.vue';
import TitleSection from 'src/components/shared/TitleSection.vue';
import content from 'src/content.json';

export default {
    components: {
        Hero,
        TitleSection
    },
    data() {
        return {
            listItems: content.generalFaq,
            activeIndexes: []
        };
    },
    methods: {
        toggleAnswer(index) {
            if (this.activeIndexes.includes(index)) {
                this.activeIndexes = this.activeIndexes.filter((i) => i !== index);
            } else {
                this.activeIndexes.push(index);
            }
        }
    },
    created() {
        if (this.listItems.length > 0) {
            this.activeIndexes.push(0); // Push the index of the first item
        }
    }
}
</script>
<style scoped>
/* Add any specific styles here */
</style>