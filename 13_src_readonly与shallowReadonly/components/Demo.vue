<template>
  <h2>姓名{{ person.name }}</h2>
  <h2>姓名{{ person.age }}</h2>
  <h2>薪资{{ person.job.j1.salary }}</h2>
  <button @click="person.name += '~'">点我修改姓名</button>
  <button @click="person.age++">点我修改年龄</button>
  <button @click="person.job.j1.salary++">点我修改薪资</button>
  <hr />
  <h2>{{ sum }}</h2>
  <button @click="sum++">点我sum++</button>
</template>

<script>
import { reactive, readonly, ref, shallowReadonly } from "vue";
export default {
  name: "MyDemo",
  setup() {
    let sum = ref(0);
    let person = reactive({
      name: "张三",
      age: 22,
      job: {
        j1: {
          salary: 20,
        },
      },
    });
    // readonly API 可以让响应式数据变成 只读的 无法修改
    // shallowReadonly API 可以让响应式数据对象类型的第一层数据变成 只读的 无法修改
    // person = readonly(person)
    person = shallowReadonly(person); 
    sum = readonly(sum);   

   /*  使用场景 在于数据是别人给你的 你可以用但是不要修改 可以用 readonly或shallowReadonly 加工一下
    这种操作方式 跟 写一个普通没有响应式数据的区别在于 普通的数据 可以被修改但是无法被Vue监测到 所以看似是无法修改
    这两种API是让响应式数据变得无法修改 而不是让vue监测不到
    */
    return {
      person,
      sum,
    };
  },
};
</script>
