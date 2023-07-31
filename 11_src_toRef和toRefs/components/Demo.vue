<template>
  <h2>姓名{{ person.name }}</h2>
  <h2>姓名{{ person.age }}</h2>
  <h2>薪资{{ person.job.j1.salary }}</h2>
  <button @click="person.name += '~'">点我修改姓名</button>
  <button @click="person.age++">点我修改年龄</button>
  <button @click="salary++">点我修改薪资</button>
</template>

<script>
import { reactive, toRef } from "vue";
export default {
  name: "MyDemo",
  setup() {
    let person = reactive({
      name: "张三",
      age: 22,
      job: {
        j1: {
          salary: 20,
        },
      },
    });

    /* - 作用：创建一个 ref 对象，其value值指向另一个对象中的某个属性。
        - 语法：```const name = toRef(person,'name')```
        - 应用:   要将响应式对象中的某个属性单独提供给外部使用时。

      - 扩展：```toRefs``` 与```toRef```功能一致，但可以批量创建多个 ref 对象，语法：```toRefs(person)```   
    */

    //  应用: 将响应式对象中的某个属性单独提供给外部使用时。
    return {
      person,
      salary: toRef(person.job.j1, "salary"),
    };
  },
};
</script>
