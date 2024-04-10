<script setup>
import TopicList from '../components/TopicList.vue'
</script>

<template>
  <main>
    <TopicList v-for="list, index in 5" :key="index"></TopicList>
  </main>
</template>
