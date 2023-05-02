import { defineStore } from 'pinia';

export const useMapStore = defineStore('map', {
  state: () => ({
    data: {}
  }),
  getters: {
    //doubleCount: (state) => state.counter * 2,
  },
  actions: {

  },
});
