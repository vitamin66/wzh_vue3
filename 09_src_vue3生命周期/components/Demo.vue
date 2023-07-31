<template>
  <h2>当前求和为{{ sum }}</h2>
  <button @click="sum++">点我+1</button>
</template>

<script>
import { ref, onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted} from "vue";
export default {
  name: "MyDemo",
  setup() {
    console.log('---setup---');
    let sum = ref(0);
    
    /* 
    可以写配置项生命周期钩子 也可以写组合式API 生命周期钩子
    另外 组合式API生命周期钩子 没有  beforeCreate 和 created 他俩在 Vue3 里就是 setup() 
    */
    // 他们都是函数 并且有一个参数 是回调函数 在对应的时机执行
    onBeforeMount(() => {
      console.log('---onBeforeMount---');
    })
    onMounted(() => {
      console.log('---onMounted---');
    })
    onBeforeUpdate(() => {
      console.log('---onBeforeUpdate---');
    })
    onUpdated(() => {
      console.log('---onUpdated---');
    })
    // vue3组合式API 中 beforeDestroy  和 destroyed 钩子 改名为 onBeforeUnmount 和 onUnmounted
    onBeforeUnmount(() => {
      console.log('---onBeforeUnmount---');
    })
    onUnmounted(() => {
      console.log('---onUnmounted---');
    })

    // 生命周期钩子不用 return 出去
    return {sum} 
  },
};
</script>
