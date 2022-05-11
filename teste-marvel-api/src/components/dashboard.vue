<template>
  <div>
    <div class="flex justify-center sm:justify-end mb-5 mx-8">
      <div class="flex bg-realGray rounded-md p-1 text-base-100">
          <img src="../assets/images/search_icon.svg" class="pl-2" alt="" srcset="">
          <input type="text" class="font-semibold outline-none ml-2 rounded-sm p-1 text-realGray" @keyup="searchCharacter" v-model="filters.input">
      </div>
    </div>
    <div class="flex flex-wrap justify-around">
      <LoaderData v-if="loader"/>
      <span v-for="(index, key) in names" :key="key">
        <router-link :to="`/CharacterPage/${(characterInfo[key])}`">
          <CardCharacter :name="names[key]" :img="images[key]" />
        </router-link>
      </span>
    </div>
    <div>
      <CharacterPagination v-if="totalPages > 1" :totalPages="totalPages" @selectPage="selectPage" />
    </div>
  </div>
</template>

<script>
import CardCharacter from './subComponents/card.vue'
import LoaderData from './subComponents/Loader.vue'
import CharacterPagination from '../components/subComponents/Pagination.vue'

export default {
  name: 'DashboardView',
  emits: ['selectPage'],
  components: {
    CardCharacter,
    CharacterPagination,
    LoaderData
  },
  data () {
    return {
      names: null,
      images: null,
      characterInfo: null,
      totalPages: null,
      loader: true,
      filters: {
        offset: 0,
        input: '',
        nameStartsWith: ''
      },
      url: {
        ts: '1651173406',
        apikey: '073cb8bc1b1f27efdf9e8e03bcd37538',
        hash: '6090660246a100b83252fc7aadc06510'
      }
    }
  },
  methods: {
    getCharacters () {
      const axios = require('axios')
      axios.get(`https://gateway.marvel.com/v1/public/characters?${this.filters.nameStartsWith}`, {
        params: {
          ts: this.url.ts,
          apikey: this.url.apikey,
          hash: this.url.hash,
          limit: 12,
          offset: this.filters.offset
        }
      })
        .then(response => {
          this.getNames(response)
          this.getImages(response)
          this.getCharacterInfo(response)
          this.pagination(response)
        })
    },
    getNames (response) {
      const names = []
      for (const key in response.data.data.results) {
        names.push(response.data.data.results[key].name)
      }
      this.names = names
      this.loader = false
    },
    getImages (response) {
      const img = []
      for (const key in response.data.data.results) {
        img.push(response.data.data.results[key].thumbnail)
      }
      this.images = img
    },
    getCharacterInfo (response) {
      const info = []
      for (const key in response.data.data.results) {
        info.push(response.data.data.results[key].id)
      }
      this.characterInfo = info
    },
    pagination (res) {
      const totalCharacters = res.data.data.total
      this.totalPages = Math.ceil(totalCharacters / 12)
    },
    selectPage (page) {
      this.filters.offset = page
      this.getCharacters()
    },
    setUrl (value) {
      this.$router.replace({ query: { search: value } })
    },
    searchCharacter () {
      this.filters.offset = 0
      setTimeout(() => {
        if (this.$route.query.search !== '') {
          this.filters.nameStartsWith = `nameStartsWith=${this.$route.query.search}&`
          this.getCharacters()
        } else {
          this.filters.nameStartsWith = ''
          this.getCharacters()
        }
      }, 300)
    }
  },
  created () {
    this.$watch('filters.input', (newValue) => {
      this.setUrl(newValue)
    })
    this.getCharacters()
    this.searchCharacter()
  }
}
</script>
