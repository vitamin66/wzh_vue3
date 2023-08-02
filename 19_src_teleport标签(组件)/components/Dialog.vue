<template>
  <div class="dialog">
    <button @click="isShow = true">点我弹窗</button>
    <!-- teleport标签组件 可以使元素瞬移 用to属性指定要瞬移到哪个元素里去 从而他的变化就不会影响他的父级组件 且更好写样式-->
    <teleport to="body">
      <!-- 加一个mask罩子 -->
      <div class="mask" v-if="isShow">
        <div class="tanchuang">
          <h2>内容</h2>
          <h3>内容</h3>
          <h4>内容</h4>
          <h5>内容</h5>
          <button @click="isShow = false">点我关闭</button>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "MyDialog",
  setup() {
    let isShow = ref(false);
    return {
      isShow,
    };
  },
};
</script>

<style>
.mask {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
}
.dialog {
  background-color: green;
  padding: 10px;
}
.tanchuang {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  width: 300px;
  height: 300px;
  background-color: pink;
  text-align: center;
}
</style>