<template>
  <div class="app">
    <h2>我是App组件</h2>
    <!-- Suspense内置组件的用法 (这是一个实验性的东西 以后可能会变) -->
    <Suspense>
      <!-- 本质也是用插槽实现的 所以要配合template使用  v-slot:default 是需要显示的组件-->
      <template v-slot:default>
        <Child />
      </template>
      <!-- v-slot:default 是等待区间想要提示用户的内容 -->
      <template v-slot:fallback>  
        <h2>请稍后,加载中....</h2>
      </template>
    </Suspense>
  </div>
</template>

<script>
// import Child from "./components/Child.vue"; // 静态引入
import { defineAsyncComponent } from "vue";
const Child = defineAsyncComponent(() => import("./components/Child.vue")); // 异步引入
// 静态引入因为是js是单线程 全是同步任务 需要等所有任务全部执行完毕才显示 也就是所有组件代码全部跑完 他们再一起出现
// 异步引入把 一些组件放到任务队列中 分成同步和异步 让同步执行完后先显示 异步再拿去执行栈执行完显示 会分开显示
// 然后Suspense 可以在子组件还没有加载出来前 弄一个加载提示 提升用户体验

export default {
  name: "App",
  components: { Child },
};
</script>

<style scoped>
.app {
  background-color: gray;
  padding: 10px;
}
</style>
