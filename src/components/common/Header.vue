<template>
  <header class="bg-white text-[14px] uppercase border-solid border-misty-sky border-b-[1px]">
    <div>
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
              <button ref="dropdownButton" @click="toggleDropdown(link.name)" :aria-expanded="isDropdownOpen(link.name)" class="dropdown-button flex items-center gap-[6px] uppercase hover:text-vibrant-green">
                {{ link.name }}
                <img class="h-[7px]" src="../../assets/images/vector1.svg" alt="Logo">
              </button>
              <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
                <div v-if="isDropdownOpen(link.name)" class="absolute -left-8 top-full z-10 mt-3 w-screen max-w-[300px] overflow-hidden rounded-[4px] bg-white shadow-lg ring-1 ring-gray-900/5" :ref="el => { if (el) dropdownContentRefs[link.name] = el; else delete dropdownContentRefs[link.name]; }">
                  <div ref="dropdownContent">
                    <div v-for="item in link.submenu" :key="item.name" class="group relative flex items-center gap-x-6 rounded-[4px] px-[16px] py-[12px] hover:bg-gray-50">
                      <div class="flex-auto">
                        <a :href="item.href" class="block">
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
                    <img :class="[isDropdownOpen(link.name) ? 'rotate-180' : '']" class="h-[7px]" src="../../assets/images/vector1.svg" alt="Logo">
                  </button>
                  <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
                    <div v-if="isDropdownOpen(link.name)" class="mt-2 space-y-2">
                      <a v-for="item in link.submenu" :key="item.name" :href="item.href" class="block rounded-[4px] py-[12px] px-[24px] hover:bg-gray-50">{{ item.name }}</a>
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

const links = ref(content.links);
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

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>