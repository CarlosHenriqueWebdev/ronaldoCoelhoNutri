<template>
    <footer class="flex flex-col text-lavender-haze bg-midnight-blue">
        <div :style="{ backgroundImage: `url(${require(`src/assets/images/img6.jpg`)})` }" class="py-[80px] md:py-[0px] bg-right">
            <div class="px-[24px] py-[24px] md:py-[100px] lg:px-[80px] bg-black-85 shadow-lg flex flex-col gap-[32px]">
                <div class="flex flex-col gap-[16px]">
                    <h2 class="text-[24px] font-bold uppercase">{{ footerCTA.title }}</h2>
                    <p class="text-[16px] md:max-w-[60%]">{{ footerCTA.description }}</p>
                </div>
                <a :href="footerCTA.url" class="uppercase text-vibrant-green underline text-[18px] font-bold">
                    {{ footerCTA.button }}
                </a>
            </div>
        </div>
        <ul class="px-[24px] lg:px-[80px] py-[48px] flex flex-col gap-[48px] border-solid border-t-[2px] border-silver-mist-25 md:grid md:grid-cols-[1.5fr_1fr_1fr]">
            <li class="flex flex-col gap-[24px]">
                <h2 class="text-[18px] uppercase font-bold">{{ about.title }}</h2>
                <p class="md:max-w-[360px]">{{ about.description }}</p>
            </li>
            <li class="flex flex-col gap-[24px]">
                <h2 class="text-[18px] uppercase font-bold">Informações de Contato</h2>
                <ul class="flex flex-col gap-[16px]">
                    <li v-for="contact in contactInfo" :key="contact.name" class="flex gap-[8px]">
                        <img :src="require(`../../assets/images/${contact.icon}`)" class="w-[22px] h-[22px]" alt="Logo">
                        <a :href="contact.href" target="_blank" class="underline">{{ contact.name }}</a>
                    </li>
                </ul>
            </li>
            <li class="flex flex-col gap-[24px]">
                <h2 class="text-[18px] uppercase font-bold">Links do site</h2>
                <ul class="flex flex-col gap-[16px]">
                    <li v-for="link in siteLinks" :key="link.name">
                        <a :href="link.href" class="hover:underline">{{ link.name }}</a>
                    </li>
                </ul>
            </li>
        </ul>
        <ul class="px-[24px] lg:px-[80px] py-[32px] border-solid border-y-[2px] border-silver-mist-25 text-silver-mist flex gap-[4px] flex-wrap">
            <li v-for="(link, index) in legalLinks" :key="index">
                <a :href="link.href" target="_blank" class="hover:underline">{{ link.name }}</a>
                <span v-if="index < legalLinks.length - 1">
                    |
                </span>
            </li>
        </ul>
        <div class="px-[24px] lg:px-[80px] py-[48px] text-center text-[20px]">
            <p>
                {{ copyright.text }} {{ currentYear }}
            </p>
        </div>
    </footer>
</template>

<script>
import content from 'src/content.json';

export default {
    data() {
        return {
            currentYear: new Date().getFullYear(),
            footerCTA: content.footerCTA,
            about: content.footerAbout,
            contactInfo: content.contactInfo,
            siteLinks: content.links,
            legalLinks: content.legalLinks,
            copyright: content.copyright
        };
    }
};
</script>
