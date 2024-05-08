<template>
  <main>
    <div v-for="list,index in topicData" :key="index">
      <h2 class="list-title">{{ list.category }}</h2>
      <div class="list-wrap">
        <ListItem :item="item" v-for="item, index in list.titles" :key="index"></ListItem>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

import ListItem from '../components/ListItem.vue'

let topicData = ref([]) 

const getTopicData = async () => {
    axios.get("http://localhost:8000/topicData")
    .then((res)=>{
        // console.log(res);
        topicData.value = res.data;
    })
    .catch((err)=> {
        console.log(err);
    })
}

onMounted(() => {
  getTopicData()
})

</script>

<style scoped>
    .list-title {
      font-weight: bold;
    }
    .list-wrap {
        width: 100vw;
        display: flex;
        flex-wrap: wrap;
        margin: 0 -10px;
    }
</style>
