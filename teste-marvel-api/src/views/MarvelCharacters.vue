<template>
  <div class="sm:m-12">
    <hr class="mb-5 opacity-30">
    <h1 class="text-3xl sm:text-justify text-center mb-8 font-semibold text-realGray">Marvel characters:</h1>
    <DashboardView />
  </div>
</template>

<script>
import DashboardView from '../components/dashboard.vue'

export default {
  name: 'MarvelCharacters',
  components: {
    DashboardView
  }
}
</script>
