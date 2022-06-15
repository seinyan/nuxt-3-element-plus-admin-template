<template>
  <div class="dashboard-header" style="margin: 0">
    <div class="dashboard-header-left-block" @click="collapseMenu">
      <el-icon class="menu-collapse-toggle" :class="{collapse: collapse}">
        <Expand/>
      </el-icon>
    </div>
    <div class="dashboard-header-right-block">

      <div class="dashboard-header-right-block-item" @click="toggleDark()">
        <el-icon class="menu-collapse-is-dark">
          <Sunny/>
        </el-icon>
      </div>
      <div class="dashboard-header-right-block-item">
        <el-badge :value="200" :max="99" class="item">
          <el-icon style="margin-top: 8px"><Bell/></el-icon>
        </el-badge>
      </div>
      <div class="dashboard-header-right-block-item">
        <el-avatar :size="40"/>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { Expand, Bell, Sunny, Moon, MoonNight } from '@element-plus/icons-vue'
import {toggleDark} from "~/composables/dark";

const props = defineProps(['collapse'])
const emit = defineEmits(['collapseMenu'])

function collapseMenu() {
  emit('collapseMenu')
}


</script>

<style scoped>

</style>
