<template>
  <div class="flex flex-wrap items-start justify-center text-realGray">
    <div class="sm:m-0 m-5">
      <img :src="image" alt="character image" class="image-shadow border-2 m-2 mt-0  min-w-min">
    </div>
    <div>
      <div class="nameCharacter bg-realGray p-5 relative after:hidden md:after:block">
        <h3 class="text-primary-content text-3xl sm:text-5xl">
          {{ name }}
        </h3>
      </div>
      <ul class="text-left max-w-lg mt-5">
        <li class="mb-2 ml-8">
          <span class="font-semibold">Description:</span>
          {{ description }}
        </li>
        <li class="mb-2 ml-8">
          <span class="font-semibold">Comics:</span>
          {{ comics }}
        </li>
        <li class="mb-2 ml-8 font-semibold cursor-pointer">
          Comics names:
          <span v-for="(key, index) in apparitions" :key="key" class="font-normal hover:text-red">
            | {{ apparitions[index].name }}
          </span>.
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PerfilCharacter',
  props: ['name', 'description', 'comics', 'image', 'apparitions']
}
</script>

<style scoped>
.nameCharacter::after {
  content: '';
  position: absolute;
  right: -88px;
  top: 0;
  border-right: 88px solid transparent;
  border-left: 0px solid #202020;
  border-top: 88px solid #202020;
  border-bottom: 0px solid transparent;
}
.image-shadow {
  box-shadow: 6px 5px 8px #202020c6;
}
</style>
