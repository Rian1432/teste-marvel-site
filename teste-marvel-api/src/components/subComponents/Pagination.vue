<template>
  <div v-if="page == 1 || page == 2" class="btn-group mt-5 justify-center mb-10">
    <button v-if="page !== 1" @click="$emit('selectPage', prev());" class="btn bg-realGray hover:bg-black normal-case">{{ page - 1 }}</button>
    <button class="btn bg-red border-red hover:bg-black normal-case">{{ page }}</button>
    <button v-if="page !== totalPages" @click="$emit('selectPage', next())" class="btn bg-realGray hover:bg-black normal-case">{{ page + 1 }}</button>
    <button v-if="page == 1 && totalPages >= 3" @click="$emit('selectPage', doubleNext())" class="btn bg-realGray hover:bg-black normal-case">{{ page + 2 }}</button>
    <button v-if="totalPages >= 5" class="btn bg-realGray hover:bg-black normal-case"> ... </button>
    <button v-if="totalPages >= 5" @click="$emit('selectPage', lastPage())" class="btn bg-realGray hover:bg-black normal-case">{{ totalPages }}</button>
  </div>
  <div v-else-if="page == totalPages" class="btn-group mt-5 justify-center mb-10">
    <button v-if="totalPages >= 5" @click="$emit('selectPage', primaryPage());" class="btn bg-realGray hover:bg-black normal-case">{{ initialPage }}</button>
    <button v-if="totalPages >= 5" class="btn bg-realGray hover:bg-black normal-case"> ... </button>
    <button @click="$emit('selectPage', doublePrev())" class="btn bg-realGray hover:bg-black normal-case">{{ page - 2 }}</button>
    <button @click="$emit('selectPage', prev())" class="btn bg-realGray hover:bg-black normal-case">{{ page - 1 }}</button>
    <button class="btn bg-red border-red hover:bg-black normal-case">{{ totalPages }}</button>
  </div>
  <div v-else-if="page > 2 && page < totalPages" class="btn-group mt-5 justify-center mb-10">
    <button @click="$emit('selectPage', primaryPage());" class="btn bg-realGray hover:bg-black normal-case">{{ initialPage }}</button>
    <button class="btn bg-realGray hover:bg-black normal-case"> ... </button>
    <button @click="$emit('selectPage', prev());" class="btn bg-realGray hover:bg-black normal-case">{{ page - 1 }}</button>
    <button class="btn bg-red border-red hover:bg-black normal-case">{{ page }}</button>
    <button @click="$emit('selectPage', next())" class="btn bg-realGray hover:bg-black normal-case">{{ page + 1 }}</button>
    <button v-if="page !== totalPages - 1" class="btn bg-realGray hover:bg-black normal-case"> ... </button>
    <button v-if="page !== totalPages - 1" @click="$emit('selectPage', lastPage())" class="btn bg-realGray hover:bg-black normal-case">{{ totalPages }}</button>
  </div>
</template>

<script>
export default {
  name: 'CharacterPagination',
  props: ['totalPages'],
  data () {
    return {
      initialPage: 1,
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
    },
    doubleNext () {
      this.page += 2
      const num = (12 * this.page) - 12
      return num
    },
    doublePrev () {
      this.page -= 2
      const num = (12 * this.page) - 12
      return num
    },
    primaryPage () {
      this.page = 1
      return 0
    },
    lastPage () {
      this.page = this.totalPages
      return (this.totalPages * 12) - 12
    }
  }
}
</script>
