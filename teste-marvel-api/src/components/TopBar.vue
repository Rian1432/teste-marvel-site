<template>
  <div>
    <nav class="navbar bg-realGray justify-between">
      <router-link class="btn rounded-sm bg-realGray border-gray-600 hover:bg-black" to="/">Home</router-link>
      <div class="bg-white rounded-md p-1">
        <img src="../assets/search_icon.svg" class="px-2" alt="" srcset="">  |
        <input type="text" class="outline-none ml-2">
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: 'TopBar'
}
</script>
