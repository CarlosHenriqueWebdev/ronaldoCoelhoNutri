<template>
    <header class="bg-white text-[14px] border-solid border-misty-sky border-b-[1px]">
        <div class="mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px]">
            <nav class="flex items-center justify-between px-[24px] py-[24px] lg:px-[80px]" aria-label="Global">
                <div class="flex lg:flex-1">
                    <a href="/" class="h-[24px] block">
                        <img class="h-full" src="../../assets/images/logo.png" alt="Logo">
                    </a>
                </div>
                <div class="flex lg:hidden">
                    <button type="button" class="inline-flex items-center justify-center rounded-[4px] p-2.5" @click="mobileMenuOpen = true">
                        <span class="sr-only">Open main menu</span>
                        <Bars3Icon class="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div class="hidden lg:flex gap-[24px] items-center">
                    <template v-for="link in links" :key="link.name">
                        <a v-if="!link.submenu" :href="link.href" class="hover:text-vibrant-green">{{ link.name }}</a>
                        <div v-else class="relative">
                            <button ref="dropdownButton" @click="toggleDropdown(link.name)" :aria-expanded="isDropdownOpen(link.name)" class="dropdown-button flex items-center gap-[6px] hover:text-vibrant-green">
                                {{ link.name }}
                                <img class="h-[5px]" src="../../assets/images/vector1.svg" alt="Logo">
                            </button>
                            <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
                                <div v-if="isDropdownOpen(link.name)" class="absolute -left-8 top-full z-10 mt-3 w-screen max-w-[300px] overflow-hidden rounded-[4px] bg-white shadow-lg ring-1 ring-gray-900/5" :ref="el => { if (el) dropdownContentRefs[link.name] = el; else delete dropdownContentRefs[link.name]; }">
                                    <div ref="dropdownContent">
                                        <div v-for="item in link.submenu" :key="item.name" class="group relative flex items-center gap-x-6 rounded-[4px] px-[16px] py-[12px] hover:bg-gray-50">
                                            <div class="flex-auto">
                                                <a v-if="link.name === 'Serviços'" :href="`/servicos/${item.slug}`" class="block">
                                                    {{ item.title }}
                                                    <span class="absolute inset-0" />
                                                </a>
                                                <a v-else :href="item.href" class="block">
                                                    {{ item.name }}
                                                    <span class="absolute inset-0" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </transition>
                        </div>
                    </template>
                </div>
            </nav>
        </div>
        <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
            <div class="fixed inset-0 z-10" />
            <DialogPanel class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-[24px] py-[24px] sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div class="flex items-center justify-between">
                    <a href="/" class="h-[24px] block">
                        <img class="h-full" src="../../assets/images/logo.png" alt="Logo">
                    </a>
                    <button type="button" class="rounded-[4px] p-2.5" @click="mobileMenuOpen = false">
                        <span class="sr-only">Close menu</span>
                        <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div>
                    <div class="divide-y divide-gray-500/10">
                        <div class="py-[32px] flex flex-col gap-[16px]">
                            <template v-for="link in links" :key="link.name">
                                <a v-if="!link.submenu" :href="link.href" class="block rounded-[4px] px-[16px] py-[12px] bg-gray-50 hover:bg-gray-100 hover:text-vibrant-green">{{ link.name }}</a>
                                <div v-else class="relative">
                                    <button ref="dropdownButton" @click="toggleDropdown(link.name)" :aria-expanded="isDropdownOpen(link.name)" class="dropdown-button flex w-full items-center justify-between rounded-[4px] py-[12px] px-[16px] bg-gray-50 hover:bg-gray-100 hover:text-vibrant-green">
                                        {{ link.name }}
                                        <img :class="[isDropdownOpen(link.name) ? 'rotate-180' : '']" class="h-[5px]" src="../../assets/images/vector1.svg" alt="Logo">
                                    </button>
                                    <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
                                        <div v-if="isDropdownOpen(link.name)" class="mt-2 space-y-2">
                                            <ul v-for="item in link.submenu" :key="item.name" :href="item.href">
                                                <li v-if="link.name === 'Serviços'">
                                                    <a :href="`/servicos/${item.slug}`" class="block rounded-[4px] py-[12px] px-[24px] hover:bg-gray-50">
                                                        {{ item.title }}
                                                    </a>
                                                </li>
                                                <li v-else>
                                                    <a :href="item.href" class="block rounded-[4px] py-[12px] px-[24px] hover:bg-gray-50">
                                                        {{ item.name }}
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </transition>
                                </div>
                            </template>
                        </div>
                    </div>
                </div>
            </DialogPanel>
        </Dialog>
    </header>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { Dialog, DialogPanel } from '@headlessui/vue';
import { XMarkIcon, Bars3Icon } from '@heroicons/vue/24/outline';
import content from 'src/content.json';

const links = ref(content.generalLinks);
const serviceLinks = ref(content.generalServices);
const mobileMenuOpen = ref(false);

const openDropdown = ref(null);
const dropdownContentRefs = ref({});

const toggleDropdown = (name) => {
    if (openDropdown.value === name) {
        openDropdown.value = null;
    } else {
        openDropdown.value = name;
    }
};

const isDropdownOpen = (name) => {
    return openDropdown.value === name;
};

const handleClickOutside = (event) => {
    if (openDropdown.value) {
        const isClickOutsideDropdown = Object.values(dropdownContentRefs.value)
            .filter(dropdownContent => dropdownContent !== null)
            .every(dropdownContent => !dropdownContent.contains(event.target));

        if (
            !event.target.closest('.dropdown-button') &&
            isClickOutsideDropdown
        ) {
            openDropdown.value = null;
        }
    }
};

// Merging services into the "Serviços" submenu
const mergeServicesIntoLinks = () => {
    const servicesLink = links.value.find(link => link.name === "Serviços");
    if (servicesLink && serviceLinks.value) {
        servicesLink.submenu = serviceLinks.value;
    }
};

onMounted(() => {
    mergeServicesIntoLinks();
    document.addEventListener('click', handleClickOutside);
    console.log("links", links)
});

onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside);
});
</script>