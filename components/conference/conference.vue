<template>
  <div>
    <h1>conference index</h1>

<!--    <pre>{{ user }}</pre>-->

<!--    <div v-if="user">-->
<!--      <rooms-block/>-->
<!--    </div>-->

  </div>
</template>

<script setup lang="ts">
import {UserModel} from "~/components/conference/user/user.model";
import RoomsBlock from "~/components/conference/room/rooms-block.vue";

const user = useCookie<UserModel>('user')

const {data, pending, error} = await useApiFetch('/ping', 'GET', {
  var_1: 134
})
console.log({data, pending, error})

</script>

