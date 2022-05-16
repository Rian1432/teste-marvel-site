<template>
  <div>
    <div class="flex justify-center sm:justify-end mb-5 mx-8">
      <div class="flex bg-realGray rounded-md p-1 text-base-100">
          <img src="../assets/images/search_icon.svg" class="pl-2" alt="" srcset="">
          <input type="text" class="font-semibold outline-none ml-2 rounded-sm p-1 text-realGray" v-model="filters.input">
      </div>
    </div>
    <div class="flex flex-wrap justify-around">
      <LoaderData v-if="loader"/>
      <span v-for="(index, key) in names" :key="key">
        <router-link :to="`/CharacterPage/${(characterId[key])}`">
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
import CardCharacter from './ui/card.vue'
import LoaderData from './ui/Loader.vue'
import CharacterPagination from '../components/ui/Pagination.vue'

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
      characterId: null,
      totalPages: null,
      loader: true,
      filters: {
        offset: 0,
        input: this.$route.query.search,
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
          this.getCharacterInfo(response)
          this.pagination(response)
        })
    },
    getCharacterInfo (response) {
      const names = []
      const img = []
      const id = []
      for (const key in response.data.data.results) {
        names.push(response.data.data.results[key].name)
        img.push(response.data.data.results[key].thumbnail)
        id.push(response.data.data.results[key].id)
      }
      this.names = names
      this.images = img
      this.characterId = id
      this.loader = false
    },
    pagination (res) {
      const totalCharacters = res.data.data.total
      this.totalPages = Math.ceil(totalCharacters / 12)
    },
    selectPage (page) {
      this.filters.offset = page
      this.getCharacters()
    },
    searchCharacter (value) {
      this.filters.offset = 0
      value !== '' ? this.$router.replace({ query: { search: value, page: '1' } }) : this.$router.replace({ query: { search: null, page: '1' } })
      setTimeout(() => {
        if (this.$route.query.search !== null) {
          this.filters.nameStartsWith = `nameStartsWith=${this.$route.query.search}&`
          this.getCharacters()
        } else {
          this.filters.nameStartsWith = ''
          this.getCharacters()
        }
      }, 100)
    }
  },
  watch: {
    'filters.input' (newValue) {
      this.searchCharacter(newValue)
    }
  },
  created () {
    if (this.$route.query.search != null) {
      this.searchCharacter(this.$route.query.search)
    } else {
      this.getCharacters()
    }
  }
}
</script>
