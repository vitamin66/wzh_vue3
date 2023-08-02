<template>
  <div class="child">
    <h2>我是Child组件</h2>
    <GrandChild />
  </div>
</template>

<script>
import GrandChild from "./Grandchild.vue";
import { } from "vue";
export default {
  name: "MyChild",
  components: { GrandChild },

};
</script>

<style>
.child {
  background-color: skyblue;
  padding: 10px;
}
</style>