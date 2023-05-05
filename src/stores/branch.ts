import { defineStore } from 'pinia';

export const useBranchStore = defineStore('branch', {
  state: () => ({
    data: [] as Branch[]
  }),
});
