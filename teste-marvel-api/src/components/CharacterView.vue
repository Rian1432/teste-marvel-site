<template>
    <div class="flex flax-wrap items-start justify-center text-realGray">
      <div class="sm:m-0 m-5">
        <img :src="image" alt="character image" class="border-2 min-w-min">
      </div>
      <ul class="text-left max-w-sm">
        <li class="mb-2 ml-8"><span class="font-semibold">Name:</span> {{ name }}</li>
        <li class="mb-2 ml-8"><span class="font-semibold">Description:</span> {{ description }} </li>
        <li class="mb-2 ml-8"><span class="font-semibold">Comics:</span> {{ comics }}</li>
        <li class="mb-2 ml-8 font-semibold">
          Comics names:
          <span v-for="(key, index) in apparitions" :key="key" class="font-normal">
            {{ apparitions[index].name }}
            </span>.
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'CharacterView',
  props: ['characterInfo'],
  data () {
    return {
      name: null,
      description: null,
      image: null,
      comics: null,
      apparitions: null
    }
  },
  methods: {
    getCharacter () {
      const axios = require('axios')
      axios.get(`https://gateway.marvel.com/v1/public/characters/${this.characterInfo}?ts=1651173406&apikey=073cb8bc1b1f27efdf9e8e03bcd37538&hash=6090660246a100b83252fc7aadc06510`, { params: { limit: 1 } })
        .then(response => {
          this.getCharacterId(response)
        })
    },
    getCharacterId (res) {
      this.name = res.data.data.results[0].name
      this.description = res.data.data.results[0].description
      this.comics = res.data.data.results[0].comics.available
      this.apparitions = res.data.data.results[0].comics.items
      console.log(this.apparitions[0].name)

      const img = res.data.data.results[0].thumbnail
      this.image = `${img.path}/portrait_incredible.${img.extension}`
    }
  },
  created () {
    this.getCharacter()
  }
}
</script>
