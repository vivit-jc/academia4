<template>
  <q-page class="row items-center justify-evenly">
    <main-view></main-view>
    <text-box></text-box>
  </q-page>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import TextBox from 'src/components/TextBox.vue';
import MainView from 'src/components/MainView.vue';
import sdata from '../scenario/s1.json'
import { useScenarioStore } from 'src/stores/scenario';
import { useDateStore } from 'src/stores/date';

const scenario = useScenarioStore()
const date = useDateStore()

onMounted(()=>{
  scenario.init(sdata.data.find(e=>e.month==date.month&&e.day==date.day))
})
</script>
