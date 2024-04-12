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
import { ref } from 'vue'
import TopicList from '../components/TopicList.vue'
import ListItem from '../components/ListItem.vue'

let topicData = ref({})
topicData = ref([
    {
      'category': 'Sci-fi',
      'titles': [
        {
          imgPath: 'https://picsum.photos/200',
          title: 'Back To The Future',
          year: '1986'
        },
        {
          imgPath: 'https://picsum.photos/200',
          title: 'Star Wars',
          year: '2008'
        },
        {
          imgPath: 'https://picsum.photos/200',
          title: 'Star trek',
          year: '2010'
        }
      ]
    },
    {
      'category': 'Drama',
      'titles': [
        {
          imgPath: 'https://picsum.photos/200',
          title: 'The Game',
          year: '1997'
        },
        {
          imgPath: 'https://picsum.photos/200',
          title: 'Oppenheimer',
          year: '2024'
        },
        {
          imgPath: 'https://picsum.photos/200',
          title: 'Tenet',
          year: '2020'
        }
      ]
    },
    {
      'category': 'Comedy',
      'titles': [
        {
          imgPath: 'https://picsum.photos/200',
          title: 'Lala Land',
          year: '2023'
        },
        {
          imgPath: 'https://picsum.photos/200',
          title: "The King's Man",
          year: '2021'
        },
        {
          imgPath: 'https://picsum.photos/200',
          title: 'Eddie the Eagle',
          year: '2016'
        }
      ]
    }
])
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
