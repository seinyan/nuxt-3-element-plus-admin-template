<template>
  <el-aside class="dashboard-menu-block" :class="{collapse: collapse}">

    <div class="menu-logo" @click="close">
      <transition name="sidebarLogoFade">
        <nuxt-link v-if="collapse" key="collapse" class="menu-logo-link" :to="{name: 'index'}">
          <img src="/logo.png" class="menu-logo-img">
        </nuxt-link>
        <nuxt-link v-else key="expand" class="menu-logo-link" :to="{name: 'index'}">
          <img src="/logo.png" class="menu-logo-img">
          <h1>Admin</h1>
        </nuxt-link>
      </transition>
    </div>

    <el-scrollbar style="height: calc(100vh - 102px)">
      <el-menu
        text-color="#bfcbd9"
        active-text-color="#409EFF"
        background-color="#304156"
        class="dashboard-el-menu"
        :default-active="$route.path"
        :collapse-transition="false"
        mode="vertical"
        :router="true"
        :collapse="collapse"
        @select="close">
        <el-menu-item v-for="route in menuRoutes" :index="route.path" :key="route.path" :route="route">
          <el-icon><icon-menu /></el-icon>
          <template #title>{{ route.meta.menu.title }}</template>
        </el-menu-item>
      </el-menu>

    </el-scrollbar>

    <el-footer class="dashboard-footer-block">Footer</el-footer>

  </el-aside>
</template>

<script setup lang="ts">
import { reactive, computed } from 'vue'
import { Menu as IconMenu } from '@element-plus/icons-vue'
import {useRouter} from "#app";

const props = defineProps(['collapse', 'windowWidth'])
const emit = defineEmits(['mobileMenuClose'])

function close() {
  if (props.windowWidth < 701) {
    emit('mobileMenuClose')
  }
}

const menuRoutes = computed(() => {
  return  useRouter().getRoutes().filter((r) => r.meta.menu) //$router.getRoutes()
})

</script>

<style scoped>

</style>
