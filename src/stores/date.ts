import { defineStore } from 'pinia';

export const useDateStore = defineStore('date', {
  state: () => ({
    month: 0,
    day: 1,
  }),
  getters: {
    //doubleCount: (state) => state.counter * 2,
  },
  actions: {
    month_j() {
      const mj = ['花','鳥','風','月']
      return mj[this.month]
    },
  },
});
