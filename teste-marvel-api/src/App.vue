<template>
  <div>
    <TopBar />
  </div>
</template>
<script>
import TopBar from './components/TopBar.vue'

export default {
  components: {
    TopBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
