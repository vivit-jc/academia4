<template>
    <div class="main-view">
        abc
    </div>
    <q-list class="branches">
      <q-item v-for="branch in branchData" :key="branch.text" clickable v-ripple>
        <div class="branch" @click="clickBranch(branch)">{{ branch.text }}</div>
      </q-item>
    </q-list>
</template>

<script setup lang="ts">
import { ref,watch } from 'vue'
import { useBranchStore } from '../stores/branch';
import { useScenarioStore } from 'src/stores/scenario';


let branch = useBranchStore();
const branchData = ref([] as Branch[])
const sdata = useScenarioStore()

watch(
  () => branch.data,
  (newValue) => {
    branchData.value = newValue
  },
)

function clickBranch(selectedBranch: Branch){
  sdata.no = Number(selectedBranch.link)
  branch.data = []
}

</script>

<style scoped>
  .main-view{
    width: 100%;
    padding: 10px;
  }
</style>