<template>
  <div>
    index page

    <pre>{{$route}}</pre>
    <pre>{{$router.getRoutes()}}</pre>


  </div>
</template>

<script setup lang="ts">
definePageMeta({
  menu: {
    title: 'Index page',
    icon: ''
  }
})
</script>

<style>

</style>
