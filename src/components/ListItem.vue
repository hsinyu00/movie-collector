<template>
    <!-- <router-link :to="{ 
        // path: `/title/${item.id}`,
        name: 'Title',
        params: {
            id: item.id
        }
    }"> -->
        <div class="list-item">
            <img :src="item.imgPath" alt="">
            <h2>{{ item.title }}</h2>
            <p>{{ item.year }}</p>
        </div>
    <!-- </router-link> -->
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
        max-width: 20%;
    }
    .list-item img {
        max-width: 100%;
    }
</style>