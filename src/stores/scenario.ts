import { defineStore } from 'pinia';

export const useScenarioStore = defineStore('scenario', {
  state: () => ({
    data: {
        month: 0,
        day: 0,
        scenes: []
    } as Sdata,
    no: 0
  }),
  getters: {
    //doubleCount: (state) => state.counter * 2,
  },
  actions: {
    init(sdata: Sdata){
        this.data = sdata
    }
  },
});
