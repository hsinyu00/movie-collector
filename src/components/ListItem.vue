<template>
    <router-link :to="`/title/${item.id}`">
        <div class="list-item">
            <img :src="item.imgPath" alt="">
            <h2>{{ item.title }}</h2>
            <p>{{ item.year }}</p>
        </div>
    </router-link>
</template>

<script>
    export default {
        props: ['item'],
    }
</script>

<style scoped>
    .list-item {
        flex: 0 0 auto;
        margin: 10px;
    }
</style>