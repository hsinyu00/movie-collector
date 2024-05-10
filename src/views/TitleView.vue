<template>
    <h1>{{ titleInfo.title }}</h1>
    <img :src="titleInfo.imgPath" >
    <p>Year {{ titleInfo.year }}</p>
    {{ titleInfo.id }}
</template>

<script setup>
import { ref, onMounted, toRefs } from 'vue'
import axios from 'axios'

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

const { id } = toRefs(props);
let titleInfo = ref({})

// console.log('id.value', id.value);

const getTitleData = async () => {
    axios.get("http://localhost:8000/topicData")
    .then((res)=>{
        for (let i = 0; i < res.data.length; i++) {
          console.log(res.data[i].titles)
          let titleObj = res.data[i].titles.filter((title) => title.id === id.value)
          if(titleObj.length === 1) {
            // console.log('titleObj[0]', titleObj[0])
            titleInfo.value = titleObj[0]
          }
        }
    })
    .catch((err)=> {
        console.log(err);
    })
}

onMounted(() => {
  getTitleData()
})

</script>

<style scoped>

</style>