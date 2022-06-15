import Vuex from 'vuex'
const createStore = () => {
  return new Vuex.Store({
    state: {
      API_URL: process.env.API_URL,
      locale: process.env.LOCATE,
      accessToken: null,
      refreshToken: null,
      user: null,
      Role: [
        { Admin: 1, title: 'ROLE_ADMIN' },
      ],
      notifications: [],
      loading: false,
      sidebar: {
        opened: false,
        withoutAnimation: false,
      },
      device: 'desktop', // desktop OR mobile
      footerText: '© Voice bot '+(new Date()).getFullYear(),
    },
    mutations: {
      SET_ASSESS_TOKEN(state, accessToken) {
        state.accessToken = accessToken
      },
      SET_REFRESH_TOKEN(state, refreshToken) {
        state.refreshToken = refreshToken
      },
      SET_CURRENT_USER(state, user) {
        state.user = user
      },
      SET_NOTIFICATIONS: (state, notifications) => {
        state.notifications = notifications
      },

      SET_ACTION_VARS: (state, actionVars) => {
        state.actionVars = actionVars
      },
      SET_VOICE_VARS: (state, voiceVars) => {
        state.voiceVars = voiceVars
      },

      SET_LOADING_FULL(state, loading){
        state.loading = loading
      },
      SET_SIDEBAR_OPENED: (state, status) => {
        state.sidebar.opened = status
      },
      TOGGLE_SIDEBAR: state => {
        state.sidebar.opened = !state.sidebar.opened
        state.sidebar.withoutAnimation = false
      },
      CLOSE_SIDEBAR: (state, withoutAnimation) => {
        // Cookies.set('sidebarStatus', 0)
        state.sidebar.opened = false
        state.sidebar.withoutAnimation = withoutAnimation
      },
      TOGGLE_DEVICE: (state, device) => {
        state.device = device
      },
    },
    actions: {
      async nuxtSpaInit({dispatch, commit}) {
        console.log('== nuxtSpaInit ==')
        const user = this.$cookies.get('user')
        const accessToken = this.$cookies.get('accessToken')
        const refreshToken = this.$cookies.get('refreshToken')
        const sidebarStatus = this.$cookies.get('sidebar_opened')

        commit('SET_CURRENT_USER', user)
        commit('SET_ASSESS_TOKEN', accessToken)
        commit('SET_REFRESH_TOKEN', refreshToken)

        if (sidebarStatus === 1) {
          commit('SET_SIDEBAR_OPENED', true);
        } else {
          commit('SET_SIDEBAR_OPENED', false);
        }

        dispatch('REFRESH_TOKEN')
        setInterval(() => {
          dispatch('REFRESH_TOKEN')
        }, 50000)

        dispatch('GET_ACTION_VARS')
        dispatch('GET_VOICE_VARS')
      },
      async nuxtServerInit({dispatch, commit}, {app}) {
        console.log('== nuxtServerInit ==')

        const user = app.$cookies.get('user')
        const accessToken = app.$cookies.get('accessToken')
        const refreshToken = app.$cookies.get('refreshToken')
        const sidebarStatus = app.$cookies.get('sidebar_opened')

        commit('SET_CURRENT_USER', user)
        commit('SET_ASSESS_TOKEN', accessToken)
        commit('SET_REFRESH_TOKEN', refreshToken)

        if (sidebarStatus === 1) {
          commit('SET_SIDEBAR_OPENED', true);
        } else {
          commit('SET_SIDEBAR_OPENED', false);
        }

        dispatch('GET_ACTION_VARS')
        dispatch('GET_VOICE_VARS')
      },

      async LOGIN({dispatch, commit}, form) {
        let {data, status} = await this.$api.restPost('/auth/login', form)

        if (status !== 200) {
          this.$cookies.remove('accessToken')
          this.$cookies.remove('refreshToken')
          this.$cookies.remove('user')
          return status
        }

        commit('SET_ASSESS_TOKEN', data.accessToken)
        commit('SET_REFRESH_TOKEN', data.refreshToken)

        this.$cookies.set('accessToken', data.accessToken)
        this.$cookies.set('refreshToken', data.refreshToken)
        this.$axios.setToken(data.accessToken, 'Bearer')

        await dispatch('GET_CURRENT_USER')

        await dispatch('GET_ACTION_VARS')
        await dispatch('GET_VOICE_VARS')

        return status
      },
      async LOGOUT() {
        this.$cookies.remove('accessToken')
        this.$cookies.remove('refreshToken')
        this.$cookies.remove('user')

        let data = await this.$api.restPost('/auth/logout')
        if (data.status !== 200) {
          return data.status
        }
      },
      async REFRESH_TOKEN({dispatch, commit}) {
        // this.$axios.setToken(this.state.refreshToken, 'Bearer')
        // let {data, status} = await this.$api.restPost('/auth/refreshToken')
        //
        // commit('SET_ASSESS_TOKEN', data.accessToken)
        //
        // this.$cookies.set('accessToken', data.accessToken)
        // this.$axios.setToken(data.accessToken, 'Bearer')
      },
      async GET_CURRENT_USER({commit}) {
        const {data} = await this.$api.restGet("/user/current")
        this.$cookies.set('user', data)
        commit('SET_CURRENT_USER', data)
      },
      async GET_NOTIFICATIONS({commit}) {
        const {data} = await this.$api.restGet("/user/notifications")
        commit('SET_NOTIFICATIONS', data)
      },

      async GET_ACTION_VARS({commit}) {
        let {data} = await this.$api.restGet('/action/vars')
        commit('SET_ACTION_VARS', data)
      },
      async GET_VOICE_VARS({commit}) {
        let {data} = await this.$api.restGet('/voice/getVars')
        commit('SET_VOICE_VARS', data)
      },

      toggleSideBar({ commit }) {
        if(this.state.sidebar.opened) {
          this.$cookies.set('sidebar_opened', 0)
        }
        else {
          this.$cookies.set('sidebar_opened', 1)
        }
        commit('TOGGLE_SIDEBAR')
      },
      closeSideBar({ commit }, { withoutAnimation }) {
        commit('CLOSE_SIDEBAR', withoutAnimation)
      },
      toggleDevice({ commit }, device) {
        commit('TOGGLE_DEVICE', device)
      },
      setSize({ commit }, size) {
        commit('SET_SIZE', size)
      },

    }
  })
}

export default createStore
