<template>
  <div class="sm:m-12">
    <hr class="mb-5">
    <h1 class="text-3xl sm:text-justify text-center mb-8 font-semibold text-gray-800">Marvel characters:</h1>
    <DashboardView />
    <hr class="my-5">
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
