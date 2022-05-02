<template>
  <div>
    <nav class="navbar bg-gray-900 justify-between">
      <router-link class="btn rounded-sm bg-gray-900 border-gray-600" to="/">Home</router-link>
      <input type="text" class="rounded-md p-1">
    </nav>
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'TopBar'
}
</script>
