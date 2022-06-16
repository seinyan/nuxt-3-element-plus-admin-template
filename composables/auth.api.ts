import {useApiFetch} from "~/composables/useApiFetch";
import { useRouter } from "#app";

export type AccessToken =  string;
export type RefreshToken =  string;

class LoginResUt {
  accessToken: AccessToken;
  refreshToken: RefreshToken;
}

export class AuthForm {
  constructor() {
    this.username = 'test@test.ru';
    this.password = '111111'
    this.agree = true
  }

  username: string;
  password: string;
  agree: boolean;
}

export const accessToken = useCookie<AccessToken>('accessToken')
export const refreshToken = useCookie<RefreshToken>('refreshToken')

export const Login = async (form: AuthForm): Promise<boolean> => {

  const {data, error} = await useApiFetch<LoginResUt>('/auth/login', 'POST', {...form}, {
    async onResponse({ request, response, options, }) {},
    async onRequestError({ request, options, error }) {},
  })

  if (!error.value) {
    refreshToken.value = data.value.refreshToken
    accessToken.value = data.value.accessToken
    return true
  }

  return false
}

export const Logout = async (form: AuthForm): Promise<void> => {
  await useApiFetch<LoginResUt>('/auth/logout', 'POST')
  refreshToken.value = null
  accessToken.value = null

  await useRouter().push({name: 'login'})
}

export const Register = async (form: AuthForm): Promise<boolean> => {

  const {error} = await useApiFetch<LoginResUt>('/user/register', 'POST', {email: form.username, password: form.password}, {
    async onResponse({ request, response, options, }) {},
    async onRequestError({ request, options, error }) {},
  })

  if (!error.value) {
    return Login(form)
  }

  return false
}

export const Restore = async (form: AuthForm): Promise<boolean> => {

  const {error} = await useApiFetch<LoginResUt>('/user/restore', 'POST', {...form}, {
    async onResponse({ request, response, options, }) { },
    async onRequestError({ request, options, error }) { },
  })

  if (!error.value) {
    return true
  }

  return false
}
