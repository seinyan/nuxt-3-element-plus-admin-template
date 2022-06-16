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
        <el-dropdown>
          <el-badge style="cursor: pointer" :value="200" :max="99" class="item">
            <i class="fa-solid fa-bell"></i>
          </el-badge>
          <template #dropdown>
            <div style="width: 200px;padding: 8px;text-align: center">
              ----
            </div>
          </template>
        </el-dropdown>
      </div>
      <div class="dashboard-header-right-block-item">
        <el-dropdown>
          <el-avatar :size="40" style="cursor: pointer"/>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="Logout">Logout</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import {toggleDark} from "~/composables/dark";
import {Logout} from "~/composables/auth.api";

const props = defineProps(['collapse'])
const emit = defineEmits(['collapseMenu'])

function collapseMenu() {
  emit('collapseMenu')
}

</script>
