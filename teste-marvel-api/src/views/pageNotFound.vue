<template>
  <div class="mt-10 flex justify-center flex-wrap">
    <div>
      <h1 class="sm:text-4xl text-3xl text-realGray font-semibold p-7">Page not Found 404</h1>
      <p class="text-xl text-realGray">maybe it's better to go home, friend.</p>
      <router-link :to="`/`">
        <button class="btn mt-5 bg-primary-content border-2 border-realGray text-realGray hover:bg-realGray hover:border-realGray hover:text-primary-content">Home</button>
      </router-link>
    </div>
    <img class="max-w-md w-full" src="../assets/images/404.png" alt="404 page not found">
  </div>
</template>

<script>
export default {
  name: 'pageNotFound'
}
</script>
