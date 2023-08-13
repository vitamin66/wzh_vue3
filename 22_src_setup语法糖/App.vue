<template>
  <h1>{{ a }}</h1>
  <button @click="jiajia">点我a加加{{ a }}</button>
  <h1>动态组件</h1>
  <!-- 在 <script setup> 中要使用动态组件的时候，应该使用动态的 :is 来绑定： -->
  <component :is="a%2==0? Child : false"></component>
</template>

<script setup>
// 用setup 语法糖 来写 可以 不用写 export default 以及return
import Child from './components/Child.vue'
import { ref } from "vue";
let a = ref("123");
let jiajia = function () {
    a.value++
};
</script>

<style>
</style>