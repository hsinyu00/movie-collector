<template>
    <h1>{{ titleObj.title }}</h1>
    <img :src="titleObj.imgPath" >
    <p>Year {{ titleObj.year }}</p>
    {{ titleObj.id }}
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
// let titleInfo = ref({})
let titleApiInfo = {}
let titleObj = ref({})

// console.log('id.value', id.value);

// const getTitleData = async () => {
//     axios.get("http://localhost:8000/topicData")
//     .then((res)=>{
//         for (let i = 0; i < res.data.length; i++) {
//           console.log(res.data[i].titles)
//           let titleObj = res.data[i].titles.filter((title) => title.id === id.value)
//           if(titleObj.length === 1) {
//             // console.log('titleObj[0]', titleObj[0])
//             titleInfo.value = titleObj[0]
//           }
//         }
//     })
//     .catch((err)=> {
//         console.log(err);
//     })
// }

async function getTitleApiData() {
    titleApiInfo = await axios.request({
      method: 'GET',
      url: 'https://imdb8.p.rapidapi.com/title/v2/get-overview',
      params: {
        tconst: id.value,
        country: 'US',
        language: 'en-US'
      },
      headers: {
        'X-RapidAPI-Key': '3c1fb3deb1msh37cda6bbb2ce2bfp1ed0abjsn333a28c9af15',
        'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
      }
  });
}

function renderTitleData() {
  getTitleApiData().then(()=>{
      titleObj.value = {
        'id': id.value,
        'title': titleApiInfo.data.data.title.titleText.text,
        'imgPath': titleApiInfo.data.data.title.primaryImage.url,
        'year': titleApiInfo.data.data.title.releaseYear.year
      }
      console.log(titleObj.value)
  });
}

onMounted(() => {
  // getTitleData()
  renderTitleData()
})

</script>

<style scoped>

</style>