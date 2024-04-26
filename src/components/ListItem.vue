<template>
    <router-link :to="{ path: `/title/${props.item.id}`}">
        <div class="list-item">
            <img :src="props.item.imgPath" alt="">
            <h2>{{ props.item.title }}</h2>
            <p>{{ props.item.year }}</p>
        </div>
    </router-link>
</template>

<!-- <script>
    export default {
        props: ['item'],
    }
</script> -->

<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
    .list-item {
        flex: 0 0 auto;
        margin: 10px;
    }
</style>