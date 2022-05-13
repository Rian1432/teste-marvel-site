<template>
  <div>
    <nav class="navbar bg-realGray justify-between">
      <router-link class="btn rounded-sm bg-realGray border-gray-600 hover:bg-black hover:border-red hover:text-red" :to="`/${1}`">Home</router-link>
    </nav>
  </div>
</template>
<script>
export default {
  name: 'TopBar'
}
</script>
