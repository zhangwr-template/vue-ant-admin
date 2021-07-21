import {InjectionKey} from 'vue'
import {createStore, useStore as baseUseStore, Store} from 'vuex'

interface State {
  token: string
  userinfo: any
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    token: '',
    userinfo: {},
    // assign
  },
  getters: {
    userinfo(state) {
      return state.userinfo
    }
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_USERINFO: (state, userinfo) => {
      state.userinfo = userinfo
    },
  },
  actions: {
  }
})

// define your own `useStore` composition function
export function useStore() {
  return baseUseStore(key)
}
