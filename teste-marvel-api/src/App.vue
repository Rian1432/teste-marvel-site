<template>
  <div>
    <TopBar />
    <div class="top w-full h-40 flex justify-center opacity-90">
      <img src="@/assets/images/marvel-logo.png" alt="marvel logo">
    </div>
    <router-view/>
    <FooterPage />
  </div>
</template>
<script>
import FooterPage from './components/Footer.vue'
import TopBar from './components/TopBar.vue'

export default {
  components: {
    TopBar,
    FooterPage
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
  color: #EF131E;
  border-color: #EF131E;
}

.top {
  background-image: url(./assets/images/hqs.jpg);
}
</style>
