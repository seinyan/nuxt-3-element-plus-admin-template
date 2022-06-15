<template>
  <el-container class="layout-container-demo" style="height: 100vh;">
    <div class="dashboard-drawer-bg" :class="{collapse: !collapse}" @click="collapseMenu"/>
    <dashboard-menu
      :collapse="collapse"
      :window-width="windowWidth"
      @mobileMenuClose="mobileMenuClose"/>

    <el-container style="width: 100%;padding: 0">

      <el-header style="padding: 0">
        <dashboard-header
          style="width: 100%;"
          :collapse="collapse"
          @collapseMenu="collapseMenu"/>
      </el-header>

      <el-scrollbar>
        <el-main>
          <slot/>
        </el-main>
      </el-scrollbar>

    </el-container>

  </el-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import {useCookie} from "#app";

const windowWidth = ref(window.innerWidth)

const onWidthChange = () => windowWidth.value = window.innerWidth
onMounted(() => window.addEventListener('resize', onWidthChange))
onUnmounted(() => window.removeEventListener('resize', onWidthChange))

const collapse = useCookie<boolean>('collapseMenu', { default: () => false })
const collapseMenu = () => {
  collapse.value = !collapse.value
}

const mobileMenuClose = () => {
  collapse.value = true
}

</script>
