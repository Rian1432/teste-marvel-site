<template>
  <div v-if="page == 1 || page == 2" class="pagination">
    <button v-if="page !== 1" @click="replacePage('prev')" class="btn btn-unselected">{{ page - 1 }}</button>
    <button class="btn btn-selected">{{ page }}</button>
    <button v-if="page !== totalPages" @click="replacePage('next')" class="btn btn-unselected">{{ page + 1 }}</button>
    <button v-if="page == 1 && totalPages >= 3" @click="replacePage('doubleNext')" class="btn btn-unselected">{{ page + 2 }}</button>
    <template v-if="totalPages >= 4">
      <button class="btn btn-unselected"> ... </button>
      <button @click="replacePage('lastPage')" class="btn btn-unselected">{{ totalPages }}</button>
    </template>
  </div>
  <div v-else-if="page == totalPages" class="pagination">
    <template v-if="totalPages >= 4">
      <button @click="replacePage('primaryPage')" class="btn btn-unselected">{{ initialPage }}</button>
      <button class="btn btn-unselected"> ... </button>
    </template>
    <button @click="replacePage('doublePrev')" class="btn btn-unselected">{{ page - 2 }}</button>
    <button @click="replacePage('prev')" class="btn btn-unselected">{{ page - 1 }}</button>
    <button class="btn btn-selected">{{ totalPages }}</button>
  </div>
  <div v-else-if="page > 2 && page < totalPages" class="pagination">
    <button @click="replacePage('primaryPage')" class="btn btn-unselected">{{ initialPage }}</button>
    <button class="btn btn-unselected"> ... </button>
    <button @click="replacePage('prev')" class="btn btn-unselected">{{ page - 1 }}</button>
    <button class="btn btn-selected">{{ page }}</button>
    <button @click="replacePage('next')" class="btn btn-unselected">{{ page + 1 }}</button>
    <template v-if="page !== totalPages - 1">
      <button class="btn btn-unselected"> ... </button>
      <button @click="replacePage('lastPage')" class="btn btn-unselected">{{ totalPages }}</button>
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
    routePage () {
      if (this.$route.query.page !== undefined) {
        this.page = parseInt(this.$route.query.page)
      }
    },
    replacePage (type) {
      let num = null
      switch (type) {
        case 'next':
          num = (12 * this.page)
          this.page += 1
          break
        case 'prev':
          if (this.page === 1 || this.page === 0) {
            return 0
          } else {
            this.page -= 1
            num = (12 * this.page) - 12
          }
          break
        case 'doubleNext':
          this.page += 2
          num = (12 * this.page) - 12
          break
        case 'doublePrev':
          this.page -= 2
          num = (12 * this.page) - 12
          break
        case 'lastPage':
          this.page = this.totalPages
          num = (this.totalPages * 12) - 12
          break
        default:
          this.page = 1
          num = 0
      }
      this.$router.replace({ query: { page: this.page } })
      this.$emit('selectPage', num)
    }
  },
  watch: {
    '$route.query.page' (to, from) {
      if (to) {
        this.routePage()
      }
    }
  },
  created () {
    this.routePage()
  }
}
</script>
