<template>
  <h1>ref数据响应式</h1>
  <!-- 模板中直接使用return出来的变量名即可 不用name.value 因为解析时vue 已经帮我们.value 了 -->
  <h2>姓名:{{ name }}</h2>
  <h2>年龄:{{ age }}</h2>
  <h2>工作类型:{{ obj.type }}</h2>
  <h2>工资:{{ obj.salary }}</h2>
  <button @click="changeInfo">点我修改信息</button>
</template>

<script>
import { ref } from "vue";
export default {
  name: "App",

  // ref函数 给数据加上ref 函数 即可变成响应式数据
  setup() {
    let name = ref("zs");
    let age = ref(22);
    let obj = ref({
      type: "前端",
      salary: "30k",
    });

    // 基本数据类型加ref函数 会被vue 封装成 refImpl实例对象 也就是引用实例对象 其中的value 才是 数据
    // 而且底层用的是  vue2 一样的数据响应原理用 Object.defineProperty() 封装的 get set 方法实现的响应式
    function changeInfo() {
      name.value = "李四";
      age.value = 33;
      // 如果通过ref函数 管理对象类型的数据 底层就是用的 proxy 封装出来的 reactive 函数 监测管理数据的 所以obj.value.type后面就不用再.value了
      obj.value.type = "ui设计师";
      obj.value.salary = "20k";

      console.log(name, age);
    }

    return {
      name,
      age,
      obj,
      changeInfo,
    };
  },
};
</script>
