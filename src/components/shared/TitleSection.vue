<template>
    <div class="flex flex-col gap-[6px] border-solid border-b-[1px] border-misty-sky pb-[8px]">
        <span :class="subtitleClass">{{ subtitle }}</span>
        <component :is="titleTag" :class="titleClass">{{ title }}</component>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        subtitle: {
            type: String,
            required: true
        },
        styleVariant: {
            type: String,
            default: ''
        }
    },
    computed: {
        titleTag() {
            return this.styleVariant === 'subtitleVariant' ? 'h3' : 'h2';
        },
        titleClass() {
            return this.styleVariant === 'subtitleVariant' ? 'text-[20px] font-bold uppercase' : 'text-[24px] font-bold uppercase';
        },
        subtitleClass() {
            return this.styleVariant === 'subtitleVariant' ? 'text-[16px] text-detail-color font-medium !font-accent uppercase' : 'text-[18px] text-detail-color font-medium !font-accent uppercase';
        }
    }
};
</script>

<style scoped>
/* You can add any additional styles here if needed */
</style>
