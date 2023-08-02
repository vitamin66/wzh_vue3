<template>
  <div class="app">
    <h2>我是App组件 (祖) {{ car.name }}--????</h2>
    <Child @carInfor="carInfor" />
  </div>
</template>

<script>
import Child from "./components/Child.vue";
import { ref } from "vue";
export default {
  name: "App",
  emits: "carInfor",
  components: { Child },

  setup() {
    const car = ref({});
    function carInfor(value) {
      // 这边接收参数 并且 想要参数在模板中可以使用 必须 用 ref 先定义一个空对象 然后 用 .value 的形式进行赋值
      car.value = value;
      console.log(car);
    }

    return {
      carInfor,
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
