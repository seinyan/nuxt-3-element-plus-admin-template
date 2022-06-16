<template>
  <div class="layout-auth">
    <div class="layout-auth-block app-shadow">
        <div style="width: 100%">
          <slot/>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  transition: 'home'
}
</script>

<style lang="scss">

//////////////////////

.layout-auth {
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.layout-auth-block {
  border-radius: 5px;
  padding: 15px;
  height: 450px;
  width: 100%;
  max-width: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.layout-auth-footer-links {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  a {
    padding: 8px;
  }
}

.layout-auth-title {
  text-align: center;
}

.layout-auth-error-msg {
  color: var(--el-color-danger);
  text-align: center;
}

.layout-auth-success-msg {
  text-align: center;
}
</style>
