import { defineNuxtPlugin } from "#app";
import ElementPlus from 'element-plus'
import ru from 'element-plus/es/locale/lang/ru'
// import 'element-plus/theme-chalk/src/index.scss'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(ElementPlus, {
    locale: ru,
  })
});
