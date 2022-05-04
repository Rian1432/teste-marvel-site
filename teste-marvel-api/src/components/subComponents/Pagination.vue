<template>
  <div class="btn-group justify-center mt-5">
    <button @click="prev" class="btn bg-realGray hover:bg-black">«</button>
    <button class="btn bg-realGray hover:bg-black normal-case">{{ 'Page ' + page }}</button>
    <button v-if="clickable" @click="next" class="btn bg-realGray hover:bg-black">»</button>
    <button v-else @click="next" class="btn bg-realGray hover:bg-black" disabled>»</button>
  </div>
</template>

<script>
export default {
  name: 'CharacterPagination',
  props: ['page', 'clickable'],
  methods: {
    prev () {
      if (this.page > 1) {
        this.$emit('prev')
      }
    },
    next () {
      this.$emit('next')
    }
  }
}
</script>
