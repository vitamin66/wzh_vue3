<template>
  <div class="grandchild">
    <h2>我是Child组件 (子) {{ car.name }}--{{ car.price }}</h2>
  </div>
</template>

<script>
import { inject } from 'vue'
export default {
    name:'GrandChild',
    setup() {
        let car = inject('car')  // 后代组件中 用inject 接收数据 且数据是响应式的
        return{car}
    }
}
</script>

<style>
    .grandchild {
        background-color: orange;
        padding: 10px;
    }
</style>