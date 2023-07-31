<template>
  <h1>setup里的两个参数(注意点)</h1>
  <h2>姓名:{{ data.person.name }}</h2>
  <h2>年龄:{{ data.person.age }}</h2>
  <button @click="chuancan">点我触发自定义事件传参给App</button>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "MyDemo",
  props: ["msg"],
  emits: ["hello"],
  /* setup 里有两个参数 props 和 context  
        props 参数会props配置项接收到的参数 存到里面

        context 中 有三个 方法
        context.emit 触发自定义事件 
        context.attrs 是props 里传过来没有接收的参数 会被他捡漏存进去
        context.slots 插槽的虚拟dom 如果 值有插槽 没有挖坑 虚拟dom就会存在里面
    */
  setup(props, context) {
    let data = reactive({
      person: {
        name: "张三",
        age: 22,
      },
    });

    function chuancan() {
      context.emit("hello", data.person.age);
    }

    return {
      data,
      chuancan,
    };
  },
};
</script>

<style>
</style>