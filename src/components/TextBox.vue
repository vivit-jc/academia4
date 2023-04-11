<template>
  <div class="text-box">
    <p class="text-onebyone">{{ textOneByOne }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

let textOneByOne = ref('')
const delayTime = 100; //何秒遅れで次の文字が表示されるか設定

onMounted(()=>{
  const text = 'あめんぼあかいなあいうえお'
  text.split('').forEach((elem, index) => {
    setTimeout( () => {
      textOneByOne.value += elem
    }, delayTime*index );
  });
})

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