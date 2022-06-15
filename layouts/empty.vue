<template>
  <div class="min-h-100-vh flex-center" v-loading="$store.state.loading">
    <transition name="fade-transform" mode="out-in">
      <nuxt/>
    </transition>
  </div>
</template>
