<template>
    <!-- <h1>{{ item.title }}</h1>
    <img :src="item.imgPath" alt="">
    <p>{{ item.year }}</p> -->
    {{ id }}
</template>

<script setup>
const props = defineProps({
  id: {
    type: String,
    required: true
  }
})
</script>

<style scoped>

</style>