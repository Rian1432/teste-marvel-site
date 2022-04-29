<template>
  <div>asd</div>
</template>
<script>
export default {
  name: 'Dashboard-View',
  methods: {
    getCharacters () {
      const config = {
        transformResponse: [function (data) {
          const payload = JSON.parse(data)
          console.log(payload.data.results[0].name)
          return data
        }]
      }
      const axios = require('axios')
      axios.get('https://gateway.marvel.com/v1/public/characters?ts=1651173406&apikey=073cb8bc1b1f27efdf9e8e03bcd37538&hash=6090660246a100b83252fc7aadc06510&limit=100', config)
    }
  },
  mounted () {
    this.getCharacters()
  }
}
</script>
