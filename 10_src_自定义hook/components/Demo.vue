<template>
  <h2>当前求和为{{ sum }}</h2>
  <button @click="sum++">点我+1</button>
  <hr>
  <h2>鼠标当前的坐标x:{{point.x}} 鼠标当前的坐标y:{{point.y}}</h2>
</template>

<script>
import usePoint from '../hooks/usePoint'
import { ref} from "vue";
export default {
  name: "MyDemo",
  setup() {
    let sum = ref(0);
    // 在setup中 可以不用写过多的逻辑 可以用 hook 把逻辑功能封装成函数  在setup 中调用即可
    let point = usePoint()
    return {sum,point} 
  },
};
</script>
