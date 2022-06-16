export const useApiFetch = async <T>(path: string, method: string, params?: object, onEvents?: any) => {
  const runtimeConfig = useRuntimeConfig()
  const { apiUrl } = runtimeConfig.public

  const {value} = useCookie<string>('access_token')
  let accessToken = null
  if (value) {
    accessToken = value
  }

  let body = null
  let query = null
  if (method === 'GET') {
    query = params
  } else {
    body = params
  }

  return await useFetch<T>(() => path, {
    baseURL: apiUrl,
    method: method,
    retry: 1,
    cache: false,
    headers: {
      Authorization: `Bearer ${accessToken}`
    },
    body: body,
    params: query,
    ...onEvents
  })
}
