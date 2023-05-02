<template>
    <div class="map-view">
      <q-card v-for="(data,place) in mapData" :key="place">
        <div class="place">{{ place }}</div>
        <div class="data">{{ data }}</div>
      </q-card>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useMapStore } from '../stores/map';

const map = useMapStore();
const mapData = ref(map.data)

</script>

<style scoped>
  .map-view{
    width: 100%;
    padding: 10px;
  }
  .place{
    font-weight: bold;
  }
</style>