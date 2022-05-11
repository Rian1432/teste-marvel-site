<template>
  <div>
    <div class="flex flex-wrap items-start justify-center text-realGray">
      <div class="sm:m-0 m-5">
        <img :src="image" alt="character image" class="image-shadow border-2 m-2 mt-0  min-w-min">
      </div>
      <div>
        <div class="nameCharacter bg-realGray p-5 relative after:hidden md:after:block">
          <h3 class="text-primary-content text-3xl sm:text-5xl">
            {{ name }}
          </h3>
        </div>
        <div class="text-left max-w-lg mt-5">
          <div class="mb-2 ml-8">
            <span class="font-semibold">Description:</span>
            {{ description }}
          </div>
        </div>
      </div>
    </div>
    <div class="my-8">
      <hr class="max-w-3xl m-auto">
      <h4 class="text-2xl font-medium text-realGray max-w-3xl m-auto text-left mt-5">Comics: {{ comics }}</h4>
      <div class="flex flex-wrap max-w-3xl m-auto mt-5">
        <span v-for="(index, key) in comicsInfo.title" :key="key" class="image-shadow border border-realGray hover:scale-105 duration-300 m-4">
          <a :href="comicsInfo.link[key]" target="_blank" :title="comicsInfo.title[key]"><img :src="comicsInfo.image[key]" alt="comic image"></a>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PerfilCharacter',
  props: ['name', 'description', 'comics', 'image', 'apparitions'],
  data () {
    return {
      comicsInfo: {
        title: [],
        link: [],
        image: []
      },
      url: {
        ts: '1651173406',
        apikey: '073cb8bc1b1f27efdf9e8e03bcd37538',
        hash: '6090660246a100b83252fc7aadc06510'
      }
    }
  },
  methods: {
    getComics () {
      for (const key in this.apparitions) {
        setTimeout(() => {
          const url = this.apparitions[key].resourceURI
          const axios = require('axios')
          axios.get(url, {
            params: {
              ts: this.url.ts,
              apikey: this.url.apikey,
              hash: this.url.hash
            }
          })
            .then(response => {
              this.getComicId(response)
            })
        }, 200)
      }
    },
    getComicId (res) {
      const title = res.data.data.results[0].title
      const link = res.data.data.results[0].urls[0].url
      const image = this.getImage(res)
      this.comicsInfo.title.push(title)
      this.comicsInfo.link.push(link)
      this.comicsInfo.image.push(image)
      console.log(this.comicsInfo.title)
    },
    getImage (res) {
      const img = res.data.data.results[0].thumbnail
      return `${img.path}/portrait_xlarge.${img.extension}`
    }
  },
  created () {
    this.getComics()
  }
}
</script>

<style scoped>
.nameCharacter::after {
  content: '';
  position: absolute;
  right: -88px;
  top: 0;
  border-right: 88px solid transparent;
  border-left: 0px solid #202020;
  border-top: 88px solid #202020;
  border-bottom: 0px solid transparent;
}
.image-shadow {
  box-shadow: 6px 5px 8px #202020c6;
}
</style>
