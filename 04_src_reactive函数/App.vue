<template>
  <h1>reactive数据响应式</h1>
  <h2>姓名:{{ person.name }}</h2>
  <h2>年龄:{{ person.age }}</h2>
  <h2>工作类型:{{ person.obj.type }}</h2>
  <h2>工资:{{ person.obj.salary }}</h2>
  <button @click="changeInfo">点我修改信息</button>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "App",

  setup() {
    // reactive 函数可以实现数据的深度响应式 只能响应对象或数组类型
    let person = reactive({
      name: "张三",
      age: 22,
      obj: {
        type: "前端",
        salary: "40k",
      },
    });

    // 另外改数据的话不需要跟vue2 一样掉$set() 或者 Vue.set 方法了 直接改就可以实现响应式
    function changeInfo() {
      person.name = "李四";
      person.age = 30;
      person.obj.type = "ui设计师";
      person.obj.salary = "50k";
    }

    return {
      person,
      changeInfo,
    };
  },
};
</script>
