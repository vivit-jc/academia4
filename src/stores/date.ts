import { defineStore } from 'pinia';

export const useDateStore = defineStore('date', {
  state: () => ({
    month: 1,
    day: 0,
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    increment() {
      this.counter++;
    },
  },
});
