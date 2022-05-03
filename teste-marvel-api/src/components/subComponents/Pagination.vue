<template>
  <div class="btn-group justify-center mt-5">
    <button @click="prev" class="btn bg-gray-900">«</button>
    <button class="btn bg-gray-900 normal-case">{{ 'Page ' + page }}</button>
    <button @click="next" class="btn bg-gray-900">»</button>
  </div>
</template>

<script>
export default {
  name: 'CharacterPagination',
  data () {
    return {
      page: 1
    }
  },
  methods: {
    prev () {
      if (this.page > 1) {
        this.page = this.page - 1
        this.$emit('prev')
      }
    },
    next () {
      this.page = this.page + 1
      this.$emit('next')
    }
  }
}
</script>
