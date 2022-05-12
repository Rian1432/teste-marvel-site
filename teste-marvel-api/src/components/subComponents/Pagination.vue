<template>
  <div v-if="page == 1 || page == 2" class="btn-group mt-5 justify-center mb-10">
    <button v-if="page !== 1" @click="$emit('selectPage', prev());" class="btn btn-unselected">{{ page - 1 }}</button>
    <button class="btn btn-selected">{{ page }}</button>
    <button v-if="page !== totalPages" @click="$emit('selectPage', next())" class="btn btn-unselected">{{ page + 1 }}</button>
    <button v-if="page == 1 && totalPages >= 3" @click="$emit('selectPage', doubleNext())" class="btn btn-unselected">{{ page + 2 }}</button>
    <template v-if="totalPages >= 5">
      <button class="btn btn-unselected"> ... </button>
      <button @click="$emit('selectPage', lastPage())" class="btn btn-unselected">{{ totalPages }}</button>
    </template>
  </div>
  <div v-else-if="page == totalPages" class="btn-group mt-5 justify-center mb-10">
    <template v-if="totalPages >= 5">
      <button @click="$emit('selectPage', primaryPage());" class="btn btn-unselected">{{ initialPage }}</button>
      <button class="btn btn-unselected"> ... </button>
    </template>
    <button @click="$emit('selectPage', doublePrev())" class="btn btn-unselected">{{ page - 2 }}</button>
    <button @click="$emit('selectPage', prev())" class="btn btn-unselected">{{ page - 1 }}</button>
    <button class="btn btn-selected">{{ totalPages }}</button>
  </div>
  <div v-else-if="page > 2 && page < totalPages" class="btn-group mt-5 justify-center mb-10">
    <button @click="$emit('selectPage', primaryPage());" class="btn btn-unselected">{{ initialPage }}</button>
    <button class="btn btn-unselected"> ... </button>
    <button @click="$emit('selectPage', prev());" class="btn btn-unselected">{{ page - 1 }}</button>
    <button class="btn btn-selected">{{ page }}</button>
    <button @click="$emit('selectPage', next())" class="btn btn-unselected">{{ page + 1 }}</button>
    <template v-if="page !== totalPages - 1">
      <button class="btn btn-unselected"> ... </button>
      <button @click="$emit('selectPage', lastPage())" class="btn btn-unselected">{{ totalPages }}</button>
    </template>
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
