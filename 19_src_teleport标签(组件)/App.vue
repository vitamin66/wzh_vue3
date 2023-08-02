<template>
  <div class="app">
    <h2>我是App组件</h2>
    <Child />
  </div>
</template>

<script>
import Child from "./components/Child.vue";
import {} from "vue";
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
