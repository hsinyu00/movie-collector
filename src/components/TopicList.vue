<template>
    <h2 class="list-title">分類一</h2>
    <div class="list-wrap">
        <ListItem v-for="item, index in 5" :key="index"></ListItem>
    </div>
</template>

<script setup>
import ListItem from './ListItem.vue'
</script>

<style scoped>
    .list-wrap {
        width: 100vw;
        display: flex;
        flex-wrap: wrap;
        margin: 0 -10px;
    }
</style>