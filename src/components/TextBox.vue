<template>
  <div class="text-box" @click="click">
    <p class="text-onebyone">{{ textOneByOne }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router'
import scenario from '../scenario/s1.json'
import { useDateStore } from '../stores/date';
import { useMapStore } from '../stores/map';


let textOneByOne = ref('')
const delayTime = 100; //何秒遅れで次の文字が表示されるか設定
const date = useDateStore();
let map = useMapStore();
const router = useRouter();
let sdata = scenario.data.find(e=>e.month==date.month&&e.day==date.day)
let textarray = sdata?.scenes[0]
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
  if(parseCommand(text)){return false}
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

function parseCommand(text:string){
  if(new RegExp(/^map/).test(text)){
    map.data = JSON.parse(text.replace('map',''))
    router.push('./map')
    console.log(map.data)
    return true
  }
  return false
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