<template>
  <div class="child">
    <h2>我是Child组件 (子) {{ car.name }}--{{ car.price }}</h2>
    <GrandChild />
  </div>
</template>

<script>
import GrandChild from "./Grandchild.vue";
import { inject } from "vue";
export default {
  name: "MyChild",
  components: { GrandChild },
  setup() {
    let car = inject("car"); // 后代组件中 用inject 接收数据 且数据是响应式的
    return {car}
  },
};
</script>

<style>
.child {
  background-color: skyblue;
  padding: 10px;
}
</style>