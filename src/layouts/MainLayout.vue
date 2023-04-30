<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          Academia4
        </q-toolbar-title>
        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <div class="row">
        <q-page class="col-10">
          <router-view />
        </q-page>
        <q-page class="col-2">
          <q-card class="my-card">
            <q-card-section>
              lorem
            </q-card-section>
          </q-card>
          <q-list>
            <q-item
              clickable v-ripple
              class="command"
              v-for="command in commands"
              :key="command.text"
            >
              {{ command.text }}
            </q-item>
          </q-list>
        </q-page>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { useDateStore } from './store/date';

const store = useTodoStore();

const commands: Command[] = [
  {text: 'コマンド1', link: 'com1'},
  {text: 'コマンド2', link: 'com2'},
  {text: 'コマンド3', link: 'com3'},
  {text: 'コマンド4', link: 'com4'},
];

</script>

<style scoped>
.command{
  width: 100%;
  margin: 2px;
  background-color: aquamarine;
}
</style>