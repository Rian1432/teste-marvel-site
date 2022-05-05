<template>
  <div class="sm:m-12">
    <hr class="mb-5 opacity-30">
    <h1 class="text-3xl sm:text-justify text-center mb-8 font-semibold text-realGray">Character view:</h1>
    <CharacterView :characterInfo="info"/>
  </div>
</template>

<script>
import CharacterView from '../components/CharacterView.vue'

export default {
  name: 'CharacterPage',
  props: ['info'],
  components: {
    CharacterView
  }
}
</script>
