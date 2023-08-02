<template>
  <div class="grandchild">
    <h2>我是GrandChild组件</h2>
    <Dialog />
  </div>
</template>

<script>
import Dialog from "./Dialog.vue";
import {} from "vue";
export default {
  name: "GrandChild",
  components: { Dialog },
};
</script>

<style>
.grandchild {
  background-color: orange;
  padding: 10px;
}
</style>