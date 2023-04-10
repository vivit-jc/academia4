<template>
  <div>
    <p>{{ title }}</p>
    <q-list bordered separator>
      <q-item v-for="todo in todos" :key="todo.id" @click="increment" clickable v-ripple>
        {{ todo.id }} - {{ todo.content }}
      </q-item>
    </q-list>
    <p>Count: {{ todoCount }} / {{ meta.totalCount }}</p>
    <p>Active: {{ active ? 'yes' : 'no' }}</p>
    <p>Clicks on todos: {{ clickCount }}</p>
    <p class="text-onebyone">
      <span class="text-split">abcdefghijk</span>
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted } from 'vue';
import { Todo, Meta } from './models';

interface Props {
  title: string;
  todos?: Todo[];
  meta: Meta;
  active: boolean;
}

onMounted(()=>{
  const textOneByOne = document.querySelector('.text-split');
  let getText: string | null;
  let getTexts: string[] = [];
  if(!textOneByOne){return false}
  getText = textOneByOne.textContent;
  textOneByOne.textContent = '';
  if(!getText){ return false}
  getTexts = getText.split('');
  
  getTexts.forEach(function (elem) {
    const newText = "<span aria-hidden='true' class='text-each'>" + elem + '</span>';
    if(textOneByOne){
      textOneByOne.insertAdjacentHTML('beforeend', newText);
    }
  });

  const textEach = textOneByOne.querySelectorAll('.text-each') as NodeListOf<HTMLElement>;
  const delayTime = 3000; //何秒遅れで次の文字が表示されるか設定

  textEach.forEach(function (elem, index) {
    setTimeout(function () {
      elem.style.transitionDelay = delayTime * index + 'ms';
      elem.classList.add('is-active');
      console.log(index)
    }, delayTime);
  });
  console.log('start')
})

const props = withDefaults(defineProps<Props>(), {
  todos: () => [],
});

const clickCount = ref(0);
function increment() {
  clickCount.value += 1;
  return clickCount.value;
}

const todoCount = computed(() => props.todos.length);

</script>

<style scoped>
.text-onebyone {
  position: relative;
}
.text-split {
  font-size: 4rem;
  clip-path: inset(0 0 0);
}
.text-each {
  display: inline-block;
  opacity: 0;
  transform: translateY(100%);
}
.is-active {
  transition: 1s;
  opacity: 1;
  transform: translateY(0%);
}

</style>