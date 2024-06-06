<!-- src/components/common/Button.vue -->
<template>
  <a
    :href="href"
    :class="buttonClasses"
  >
    <slot></slot>
  </a>

</template>

<script>
export default {
  props: {
    href: {
      type: String,
      required: true,
    },
    buttonClasses: {
      type: String,
      default:
        "btn w-fit",
    },
  },
};
</script>

<style scoped>
.btn {
 font-size: 16px;
 font-weight: bold;
 padding: 12px 32px;
 background: #57B957;
 color: white;
 text-transform: uppercase;
 border-radius: 4px;
 cursor: pointer;
}

.btn:hover {
 background: linear-gradient(90deg, #57B957 0%, #64bf64 100%);
}

.btn:active {
 transform: translate(0em, 0.2em);
}
</style>
