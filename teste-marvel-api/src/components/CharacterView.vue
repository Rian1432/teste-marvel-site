<template>
    <div>
      <LoaderData v-if="loader" />
      <perfil-character v-if="perfil" :name="name" :description="description" :comics="comics" :image="image" :apparitions="apparitions"/>
    </div>
</template>

<script>
import PerfilCharacter from './subComponents/Perfil.vue'
import LoaderData from './subComponents/Loader.vue'

export default {
  components: { LoaderData, PerfilCharacter },
  name: 'CharacterView',
  props: ['characterInfo'],
  componets: {
    LoaderData,
    PerfilCharacter
  },
  data () {
    return {
      name: null,
      description: null,
      image: null,
      comics: null,
      apparitions: null,
      loader: true,
      perfil: false,
      url: {
        ts: '1651173406',
        apikey: '073cb8bc1b1f27efdf9e8e03bcd37538',
        hash: '6090660246a100b83252fc7aadc06510'
      }
    }
  },
  methods: {
    getCharacter () {
      const axios = require('axios')
      axios.get(`https://gateway.marvel.com/v1/public/characters/${this.characterInfo}?`, {
        params: {
          ts: this.url.ts,
          apikey: this.url.apikey,
          hash: this.url.hash,
          limit: 1
        }
      })
        .then(response => {
          this.getCharacterId(response)
        })
    },
    getCharacterId (res) {
      const response = res.data.data.results[0]
      this.name = response.name
      this.description = response.description
      this.comics = response.comics.available
      this.apparitions = response.comics.items

      const img = response.thumbnail
      this.image = `${img.path}/portrait_incredible.${img.extension}`
      this.loader = false
      this.perfil = true
    }
  },
  created () {
    this.getCharacter()
  }
}
</script>
