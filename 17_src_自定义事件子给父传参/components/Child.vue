<template>
  <div class="child">
    <h2>我是Child组件 (子) {{ name }}--{{ price }}</h2>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  name: "MyChild",
  setup(props, context) {
    let car = reactive({ name: "奔驰", price: "40w" });
    // 自定义事件子给父传参 调用自定义事件
    context.emit("carInfor", car)
    return {
      ...toRefs(car),
    };
  },
};
</script>

<style>
.child {
  background-color: skyblue;
  padding: 10px;
}
</style>