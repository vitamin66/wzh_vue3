<template>
  <h2>姓名{{ person.name }}</h2>
  <h2>姓名{{ person.age }}</h2>
  <h2>薪资{{ person.job.j1.salary }}</h2>
  <button @click="person.name += '~'">点我修改姓名</button>
  <button @click="person.age++">点我修改年龄</button>
  <button @click="salary++">点我修改薪资</button>
  <hr />
  <h2>{{ x.y }}</h2>
  <button @click="x.y++">点我x.y++</button>
</template>

<script>
import { shallowReactive, shallowRef } from "vue";
export default {
  name: "MyDemo",
  setup() {
    // shallowReactive 只考虑对象类型数据的第一层响应式
    let person = shallowReactive({
      name: "张三",
      age: 22,
      job: {
        j1: {
          salary: 20,
        },
      },
    });

    // shallowRef 只考虑普通数据类型的响应式
    let x = shallowRef({
      y: 0,
    });

    return {
      person,
      x,
    };
  },
};
</script>
