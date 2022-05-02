<template>
  <div class="sm:m-12">
    <hr class="mb-5">
    <h1 class="text-3xl text-justify mb-8 font-semibold text-gray-800">Marvel characters:</h1>
    <DashboardView />
    <hr class="my-5">
    <CharacterPagination />
  </div>
</template>

<script>
import DashboardView from '../components/dashboard.vue'
import CharacterPagination from '../components/Pagination.vue'

export default {
  name: 'MarvelCharacters',
  components: {
    DashboardView,
    CharacterPagination
  }
}
</script>
