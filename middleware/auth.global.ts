export default defineNuxtRouteMiddleware((to, from) => {
  console.log('running global middleware')
  if (to.name === 'index') {
    const user = useCookie<string>('accessToken')
    if (!user.value) {
      return navigateTo('/login')
    }
  }
})
