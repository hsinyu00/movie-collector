<template>
  <main>
    <!-- <div v-for="list,index in topicData" :key="index">
      <h2 class="list-title">{{ list.category }}</h2>
      <div class="list-wrap">
        <ListItem :item="item" v-for="item, index in list.titles" :key="index"></ListItem>
      </div>
    </div> -->

    <!-- <div class="list-wrap">
      <ListItem :item="item" v-for="item, index in topicApiData" :key="index"></ListItem>
    </div> -->

    <div v-for="list,index in topicApiData2" :key="index">
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
import topicTitles from '../assets/topicTitles.js'
import topicTitles2 from '../assets/topicTitles2.js'

let topicData = ref([]) 
let topicApiData = ref([]) 
let topicApiData2 = ref([]) 

function getTopicData() {
    axios.get("http://localhost:8000/topicData")
    .then((res)=>{
        // console.log('getTopicData', res);
        topicData.value = res.data;
    })
    .catch((err)=> {
        console.log(err);
    })
}

function getTopicApiData() {
    let promiseArray = [];
    for(let i=0;i<topicTitles.length;i++){
        var apiRequest = axios.request({
            method: 'GET',
            url: 'https://imdb8.p.rapidapi.com/title/v2/get-overview',
            params: {
              tconst: topicTitles[i],
              country: 'US',
              language: 'en-US'
            },
            headers: {
              'X-RapidAPI-Key': '3c1fb3deb1msh37cda6bbb2ce2bfp1ed0abjsn333a28c9af15',
              'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
            }
          });
        promiseArray.push(apiRequest)
    }

    Promise.all(promiseArray)
    .then((values) => {
      for(let j=0;j<values.length;j++){
        topicApiData.value.push({
          'id': topicTitles[j],
          'title': values[j].data.data.title.titleText.text,
          'imgPath': values[j].data.data.title.primaryImage.url,
          'year': values[j].data.data.title.releaseYear.year
        })
        console.log(topicApiData.value)
      }
    })
    .catch((error) => {
      console.error(error.message);
    });

}

function getTopicApiData2() {
    for(let x=0;x<topicTitles2.length;x++) {
        let singleCatObj = {
          // 'category': '',
          // 'titles': []
        };
        singleCatObj.category = topicTitles2[x].category;
        console.log('singleCatObj', singleCatObj);

        let promiseArray = [];
        for(let i=0;i<topicTitles2[x].titles.length;i++){
            var apiRequest = axios.request({
                method: 'GET',
                url: 'https://imdb8.p.rapidapi.com/title/v2/get-overview',
                params: {
                  tconst: topicTitles2[x].titles[i],
                  country: 'US',
                  language: 'en-US'
                },
                headers: {
                  'X-RapidAPI-Key': '3c1fb3deb1msh37cda6bbb2ce2bfp1ed0abjsn333a28c9af15',
                  'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
                }
            });
            promiseArray.push(apiRequest)
        }

        Promise.all(promiseArray, singleCatObj)
        .then((values) => {
          let titleArr = [];
          for(let j=0;j<values.length;j++){
            titleArr.push({
              'id': values[j].data.data.title.id,
              'title': values[j].data.data.title.titleText.text,
              'imgPath': values[j].data.data.title.primaryImage.url,
              'year': values[j].data.data.title.releaseYear.year
            })
            
          }
          console.log('titleArr', titleArr);
          singleCatObj.titles = titleArr;
          console.log('singleCatObj2', singleCatObj);
          
        // })
        // .then((singleCatObj) => {
          topicApiData2.value.push(singleCatObj);
          console.log('topicApiData2', topicApiData2);
        })
        .catch((error) => {
          console.error(error.message);
        });
    }
}



onMounted(() => {
  // getTopicData()
  // getTopicApiData()
  getTopicApiData2()
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
