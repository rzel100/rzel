import { defineStore } from 'pinia'

export const dataStore = defineStore({
  id: 'data',
  state: () => ({
    counter: 0,
    textnya : 'Hello World'
  }),
  getters: {
    doubleCount: (state) => state.counter * 2
  },
  actions: {
    increment() {
      this.counter++
    }
  },
  persist : true
})
