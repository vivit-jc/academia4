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
        <q-page class="col-2">
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
        <q-page class="col-10">
          <router-view />
        </q-page>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">

const commands: Command[] = [
  {text: 'コマンド1', link: 'com1'},
  {text: 'コマンド2', link: 'com2'},
  {text: 'コマンド3', link: 'com3'},
  {text: 'コマンド4', link: 'com4'},
];

</script>
