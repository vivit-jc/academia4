import { defineStore } from 'pinia';

export const useScenarioStore = defineStore('scenario', {
  state: () => ({
    scenes: []
  }),
  getters: {
    //doubleCount: (state) => state.counter * 2,
  },
  actions: {
    init(sdata){
      this.data = sdata
    }
  },
});
