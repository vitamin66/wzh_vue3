<template>
  <h2>当前求和为{{ sum }}</h2>
  <button @click="sum++">点我+1</button>
  <hr />
  <h2>当前信息为{{ msg }}</h2>
  <button @click="msg += '!'">修改信息</button>
  <hr />
  <h2>姓名{{ person.name }}</h2>
  <h2>年龄{{ person.age }}</h2>
  <h2>薪资{{ person.job.j1.salary }}</h2>
  <button @click="person.name += '~'">点我修改姓名</button>
  <button @click="person.age++">点我修改年龄</button>
  <button @click="person.job.j1.salary++">点我修改薪资</button>
</template>

<script>
import { ref, reactive, watchEffect } from "vue";
export default {
  name: "MyDemo",
  setup() {
    let sum = ref(0);
    let msg = ref("哈哈哈");
    let person = reactive({
      name: "张三",
      age: 22,
      job: {
        j1: {
          salary: 20,
        },
      },
    });

    /* 
  watchEffect函数 和 watch 的区别 
  watchEffect 直接指定回调即可 在回调函数中用到了哪个 数据 他就监视哪个数据 并且可以深度监视 且默认一上来就掉一次 (immediatem为true)
  watch 函数需要指定 监视的属性和回调
  另外 watchEffect 和 computed 有些类似 因为都是当 监视的数据源(或依赖的数据源发生变化时调用) 比较智能
  但是 watchEffect 和 computed 有类似的地方也有区别 区别在于 watchEffect 更注重回调中的逻辑 而computed只注重返回值
  */
    watchEffect(() => {
      let x1 = person.name;
      let x2 = person.job.j1.salary;
      console.log(x1,x2);
    });

    return {
      sum,
      msg,
      person,
    };
  },
};
</script>

<style>
</style>