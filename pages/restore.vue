<template>
  <div>
    <h1 class="layout-auth-title">Забыли пароль?</h1>

    <p v-show="error" class="layout-auth-error-msg">
      Пользователь не существует!
    </p>
    <p v-show="successRestore" class="layout-auth-success-msg">
      Спасибо, пароль отправлен на ваш E-mail!
    </p>

    <el-form
      v-if="!successRestore"
      label-position="top"
      ref="ruleFormRef"
      :model="form"
      :rules="rules"
      @keyup.enter="submitForm"
      status-icon>
      <el-form-item label="E-mail" prop="username">
        <el-input v-model="form.username" placeholder="E-mail"/>
      </el-form-item>
      <el-form-item prop="agree">
        <el-checkbox label="Согласне на обработку персональных данных" v-model="form.agree"/>
      </el-form-item>
      <el-form-item>
        <div class="flex-center-row w-100">
          <el-button type="primary" @click="submitForm">Регистрация</el-button>
        </div>
      </el-form-item>
    </el-form>

    <div class="layout-auth-footer-links">
      <NuxtLink :to="{ name: 'login' }">Войти</NuxtLink>
      <NuxtLink :to="{ name: 'register' }">Регистрация</NuxtLink>
    </div>

  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'auth'
})
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { emailRule, required, useValidateForm } from "~/utils/element.utils";
import { AuthForm, Restore } from "~/composables/auth.api";

const ruleFormRef = ref<FormInstance>()
const error = ref<boolean>(false)
const successRestore = ref<boolean>(false)
const form: AuthForm = reactive<AuthForm>(new AuthForm())

const rules = reactive<FormRules>({
  username: [required, emailRule],
  password: [required],
})

const submitForm = async () => {
  if (await useValidateForm(ruleFormRef.value)) {
    successRestore.value = await Restore(form)
    error.value = !successRestore.value
  }
}

</script>
