<template>
  <div class="rooms-block">
    <h1>rooms-block</h1>

    <room-create/>

  </div>
</template>

<script>
import RoomCreate from "~/components/conference/room/room-create";
export default {
  name: "rooms-block",
  components: {RoomCreate}
}
</script>

<style scoped lang="scss">
.rooms-block {
  border: 1px solid black;
  width: 300px;
}
</style>
