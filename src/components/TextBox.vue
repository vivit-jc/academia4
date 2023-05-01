<template>
  <div class="text-box" @click="click">
    <p class="text-onebyone">{{ textOneByOne }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import scenario from '../scenario/s1.json'
import { useDateStore } from '../stores/date';

let textOneByOne = ref('')
const delayTime = 100; //何秒遅れで次の文字が表示されるか設定
const date = useDateStore();
let sdata = scenario.data.find(e=>e.month==date.month&&e.day==date.day&&e.start)
let textarray = sdata?.text.split('@')
let text: string|undefined
let clicklock = false
if(textarray&&textarray.length>0){
  text = textarray.shift()
}

onMounted(()=>{
  if(!text){return false}
  setTextBox(text);
})

function click(){
  if(textarray && !clicklock){
    text = textarray.shift()
    if(text){
      textOneByOne.value=''
      setTextBox(text);
    }
  }
}

function setTextBox(text:string){
  text.split('').forEach((elem, index) => {
    setTimeout( () => {
      textOneByOne.value += elem
    }, delayTime*index );
  });
  clicklock = true
  setTimeout( () => {
    clicklock = false
  }, text.length*delayTime );
}

</script>

<style scoped>
.text-box{
  width: 100%;
  padding: 10px;
  border: thick double;
}
.text-onebyone{
  font-size: large;
}
</style>