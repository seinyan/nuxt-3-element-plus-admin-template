<template>
  <div class="dashboard-header" style="margin: 0">
    <div class="dashboard-header-left-block" @click="collapseMenu">
      <el-icon class="menu-collapse-toggle" :class="{collapse: collapse}">
        <i class="fa-solid fa-bars"></i>
      </el-icon>
    </div>
    <div class="dashboard-header-right-block">

      <div class="dashboard-header-right-block-item" @click="toggleDark()">
        <el-icon class="menu-collapse-is-dark">
          <i class="fa-solid fa-moon"></i>
        </el-icon>
      </div>
      <div class="dashboard-header-right-block-item">
        <el-badge :value="200" :max="99" class="item">
          <i class="fa-solid fa-bell"></i>
        </el-badge>
      </div>
      <div class="dashboard-header-right-block-item">
        <el-avatar :size="40"/>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import {toggleDark} from "~/composables/dark";

const props = defineProps(['collapse'])
const emit = defineEmits(['collapseMenu'])

function collapseMenu() {
  emit('collapseMenu')
}

</script>
