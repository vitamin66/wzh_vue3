<template>
  <div class="app">
    <h2>我是App组件 (祖) {{ name }}--{{ price }}</h2>
    <Child />
  </div>
</template>

<script>
import Child from "./components/Child.vue";
import { provide, reactive, toRefs } from "vue";
export default {
  name: "App",
  components: { Child },
  setup() {
    let car = reactive({ name: "奔驰", price: "40k" });
    provide("car", car);

    return {
      ...toRefs(car),
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
