<template>
  <div>
    index page

    <i class="fa-solid fa-address-book"></i>
    <i class="fa-solid fa-address-book"></i>
    <i class="fa-solid fa-address-book"></i>
    <i class="fa-solid fa-address-book"></i>
    <i class="fa-solid fa-address-book"></i>
    <i class="fa-solid fa-address-book"></i>

    <pre>{{$route}}</pre>
    <pre>{{$router.getRoutes()}}</pre>


  </div>
</template>

<script setup lang="ts">
definePageMeta({
  menu: {
    title: 'Index page',
    icon: 'fa-solid fa-circle'
  }
})
</script>

<style>

</style>
