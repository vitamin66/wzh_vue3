<template>
  <div class="app">
    <h2>我是App组件</h2>
  </div>
</template>

<script>
import { isProxy, isReactive, isReadonly, isRef, reactive, readonly, ref } from "vue";
export default {
  name: "App",

  setup() {
    const car = reactive({
      name: "张三",
      age: 22,
    });
    let car2 = readonly(car)
    let sum = ref(0);

    // 返回布尔值 响应式数据的判断
    console.log(isRef(sum))
    console.log(isReactive(car))
    console.log(isReadonly(car2))
    console.log(isProxy(car))
    console.log(isProxy(car2))

    return {
      car,
    };
  },
};
</script>
<style scoped>
.app {
  background-color: gray;
  padding: 10px;
}
</style>
