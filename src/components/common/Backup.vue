<template>
    <nav class="px-[24px] py-[24px] relative flex flex-wrap items-center justify-between bg-white">
        <div class="w-full flex flex-wrap items-center justify-between">
            <div v-bind:class="{'flex': !showMenu, 'hidden': showMenu}" class="items-center w-full relative justify-between lg:w-auto lg:static lg:block lg:justify-start">
                <a href="#" class="h-[24px] md:h-[28px] block">
                    <img class="h-full" src="../../assets/images/logo.png" alt="Logo">
                </a>
                <button class="flex flex-col gap-[3px] md:hidden" type="button" v-on:click="toggleNavbar()">
                    <div class="w-[22px] h-[3px] bg-forest-night"></div>
                    <div class="w-[22px] h-[3px] bg-forest-night"></div>
                    <div class="w-[22px] h-[3px] bg-forest-night"></div>
                </button>
            </div>
            <div v-bind:class="{'hidden': !showMenu, 'flex': showMenu}" class="w-full lg:flex lg:flex-grow items-center">
                <ul class="uppercase text-[14px] items-center flex flex-col bg-white gap-[32px] w-full">
                    <div class="w-full flex items-center justify-between">
                        <li>
                            <a href="#" class="h-[24px] md:h-[28px] block">
                                <img class="h-full" src="../../assets/images/logo.png" alt="Logo">
                            </a>
                        </li>
                        <li>
                            <button type="button" v-on:click="toggleNavbar()" class="flex flex-col gap-[3px] md:hidden">
                                <div class="w-[22px] h-[3px] bg-forest-night"></div>
                                <div class="w-[22px] h-[3px] bg-forest-night"></div>
                                <div class="w-[22px] h-[3px] bg-forest-night"></div>
                            </button>
                        </li>
                    </div>
                    <div class="w-full flex flex-col gap-[16px]">
                        <li>
                            <a href="#" style="box-shadow: inset 0 2px 4px 0 rgb(2 6 23 / 0.3), inset 0 -2px 4px 0 rgb(203 213 225);" class="uppercase block cursor-pointer items-center text-start rounded-[4px] border border-soft-sage bg-gradient-to-b from-slate-50 to-slate-200 px-[16px] py-[12px] font-semibold hover:opacity-90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-soft-sage focus-visible:ring-offset-2 active:opacity-100">
                                Proceed
                            </a>
                        </li>
                        <li>
                            <span style="box-shadow: inset 0 2px 4px 0 rgb(2 6 23 / 0.3), inset 0 -2px 4px 0 rgb(203 213 225);" class="uppercase block cursor-pointer items-center text-start rounded-[4px] border border-soft-sage bg-gradient-to-b from-slate-50 to-slate-200 px-[16px] py-[12px] font-semibold hover:opacity-90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-soft-sage focus-visible:ring-offset-2 active:opacity-100 cursor-pointer flex gap-[4px] items-center" @click="toggleDropdown">Services <img class="" src="../../assets/images/vector1.svg" alt="Logo"></span>
                            <ul v-if="isDropdownOpen" class="absolute bg-white z-10">
                                <li><a href="#" class="block hover:text-vibrant-green">Service 1</a></li>
                                <li><a href="#" class="block hover:text-vibrant-green">Service 2</a></li>
                                <li><a href="#" class="block hover:text-vibrant-green">Service 3</a></li>
                            </ul>
                        </li>
                    </div>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script>
export default {
    data() {
        return {
            isDropdownOpen: false,
            showMenu: true
        }
    },
    methods: {
        toggleDropdown() {
            this.isDropdownOpen = !this.isDropdownOpen;
        },
        closeDropdown() {
            this.isDropdownOpen = false;
        },
        toggleNavbar: function() {
            this.showMenu = !this.showMenu;
        }
    }
}
</script>