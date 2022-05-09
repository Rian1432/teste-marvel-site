<template>
  <div class="btn-group mt-5 justify-center">
    <button v @click="$emit('selectPage', prev());" class="btn bg-realGray hover:bg-black normal-case">{{ page - 1 }}</button>
    <button @click="$emit('selectPage', (page *12 ) - 12)" class="btn bg-red border-red hover:bg-black normal-case">{{ page }}</button>
    <button @click="$emit('selectPage', next())" class="btn bg-realGray hover:bg-black normal-case">{{ page + 1 }}</button>
    <button @click="$emit('selectPage', 'deu certo')" class="btn bg-realGray hover:bg-black normal-case"> ... </button>
    <button @click="$emit('selectPage', (totalPages *12 ) - 12)" class="btn bg-realGray hover:bg-black normal-case">{{ totalPages }}</button>
  </div>
</template>

<script>
export default {
  name: 'CharacterPagination',
  props: ['totalPages'],
  data () {
    return {
      page: 1
    }
  },
  methods: {
    next () {
      const num = (12 * this.page)
      this.page += 1
      return num
    },
    prev () {
      if (this.page === 1 || this.page === 0) {
        return 0
      } else {
        this.page -= 1
        const num = (12 * this.page) - 12
        return num
      }
    }
  }
}
</script>
