<template>
  <div class="flex flex-wrap justify-around">
    <span v-for="(index, key) in names" :key="key">
      <CardCharacter :name="names[key]" :img="images[key]"/>
    </span>
    <!-- <div >{{ images }}</div> -->
  </div>
</template>

<script>
import CardCharacter from './subcomponents/card.vue'

export default {
  name: 'DashboardView',
  components: {
    CardCharacter
  },
  data () {
    return {
      characters: null,
      names: null,
      images: null
    }
  },
  methods: {
    getCharacters () {
      const axios = require('axios')
      axios.get('https://gateway.marvel.com/v1/public/characters?ts=1651173406&apikey=073cb8bc1b1f27efdf9e8e03bcd37538&hash=6090660246a100b83252fc7aadc06510&limit=20')
        .then(response => {
          this.getNames(response)
          this.getImages(response)
        })
    },
    getNames (response) {
      const names = []
      for (const key in response.data.data.results) {
        names.push(response.data.data.results[key].name)
      }
      this.names = names
    },
    getImages (response) {
      const img = []
      for (const key in response.data.data.results) {
        img.push(response.data.data.results[key].thumbnail)
      }
      this.images = img
    }
  },
  created () {
    this.getCharacters()
  }
}
</script>
