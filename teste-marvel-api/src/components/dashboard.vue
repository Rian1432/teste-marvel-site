<template>
  <div>
    <div class="flex justify-center sm:justify-end mb-5 mx-8">
      <div class="flex bg-realGray rounded-md p-1 text-base-100">
          <img src="../assets/images/search_icon.svg" class="pl-2" alt="" srcset="">
          <input type="text" class="font-semibold outline-none ml-2 rounded-sm p-1 text-realGray" @keyup="debounceSearch">
      </div>
    </div>
    <div class="flex flex-wrap justify-around">
      <span v-for="(index, key) in names" :key="key">
        <CardCharacter :name="names[key]" :img="images[key]"/>
      </span>
    </div>
    <div>
      <CharacterPagination @prev="prev()" @next="next()" v-if="pagination"/>
    </div>
  </div>
</template>

<script>
import CardCharacter from './subComponents/card.vue'
import CharacterPagination from '../components/subComponents/Pagination.vue'

export default {
  name: 'DashboardView',
  emits: ['prev', 'next'],
  components: {
    CardCharacter,
    CharacterPagination
  },
  data () {
    return {
      characters: null,
      names: null,
      images: null,
      pagination: true,
      filters: {
        offset: 0,
        input: ''
      }
    }
  },
  methods: {
    getCharacters () {
      const axios = require('axios')
      axios.get(`https://gateway.marvel.com/v1/public/characters?ts=1651173406&apikey=073cb8bc1b1f27efdf9e8e03bcd37538&hash=6090660246a100b83252fc7aadc06510&limit=12&offset=${this.filter.offset}`)
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
    },
    prev () {
      if (this.offset > 0) {
        this.offset -= 12
        this.getCharacters()
      }
    },
    next () {
      this.offset += 12
      this.getCharacters()
    },
    debounceSearch (text) {
      this.filters.offset = 0
      setTimeout(() => {
        if (text !== '') {
          this.filters.nameStartsWith = text
          this.getCharacters()
        } else {
          delete this.filters['nameStartsWith']
          this.getCharacters()
        }
      }, 300)
    }
  },
  created () {
    this.getCharacters()
  }
}
</script>
