<template>
  <div class="text-box" @click="click">
    <p class="text-onebyone">{{ textOneByOne }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { useRouter } from 'vue-router'
import { useMapStore } from '../stores/map';
import { useBranchStore} from '../stores/branch';
import { useScenarioStore } from 'src/stores/scenario';

let textOneByOne = ref('')
const delayTime = 100; //何秒遅れで次の文字が表示されるか設定
let map = useMapStore();
let branch = useBranchStore();
const router = useRouter();
let sdata = useScenarioStore()
let textarray = sdata?.data.scenes[0]
let text: string|undefined
let clicklock = false

onMounted(()=>{
  console.log('mounted box',textarray,sdata.data)
  if(textarray&&textarray.length>0){
    text = textarray.shift()
  }
  if(!text){return false}
  setTextBox(text);
})

watch(
  () => sdata.no,
  (newValue) => {
    textarray = sdata.data.scenes[newValue]
    if(textarray&&textarray.length>0){
      text = textarray.shift()
    }
    if(!text){return false}
    textOneByOne.value=''
    setTextBox(text);
  },
)

function click(){
  if(textarray.length==0 || clicklock){
    return false
  }
  text = textarray.shift()
  if(text){
    if(setTextBox(text)){
      textOneByOne.value=''
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
  return true
}

function parseCommand(text:string){
  if(new RegExp(/^map/).test(text)){
    map.data = JSON.parse(text.replace('map',''))
    router.push('./map')
    console.log(map.data)
    return true
  } else if(new RegExp(/^branch/).test(text)) {
    branch.data = JSON.parse(text.replace('branch',''))
    console.log(branch.data)
    return true
  } else if(new RegExp(/^link/).test(text)) {
    sdata.no = Number(text.replace('link(','').replace(')',''))
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