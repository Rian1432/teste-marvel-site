<template>
  <span class="card card-compact bg-base-100 shadow-xl w-64 cursor-pointer hover:scale-105 duration-300 m-3 text-realGray border border-realGray border-opacity-10">
    <figure><img :src="setImage()" alt="Shoes" /></figure>
    <div class="p-2 text-lg font-semibold border-t border-t-realGray border-opacity-10">{{ name }}</div>
  </span>
</template>

<script>
export default {
  name: 'CardCharacter',
  props: ['name', 'img'],
  methods: {
    setImage () {
      return `${this.img.path}/landscape_xlarge.${this.img.extension}`
    }
  }
}
</script>
