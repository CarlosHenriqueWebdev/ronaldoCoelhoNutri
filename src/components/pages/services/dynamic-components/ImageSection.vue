<template>
    <div class="my-[12px]">
        <img :src="require(`src/assets/images/${section.src}`)" :alt="section.alt" class="shadow-image w-full object-cover rounded-[4px]" />
    </div>
</template>

<script>
export default {
    props: {
        section: {
            type: Object,
            required: true
        }
    }
};
</script>
