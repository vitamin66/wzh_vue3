<template>
  <h2>当前求和为{{ sum }}</h2>
  <button @click="sum++">点我+1</button>
  <hr />
  <h2>当前信息为{{ msg }}</h2>
  <button @click="msg += '!'">修改信息</button>
  <hr />
  <h2>姓名{{ person.name }}</h2>
  <h2>姓名{{ person.age }}</h2>
  <h2>薪资{{ person.job.j1.salary }}</h2>
  <button @click="person.name += '~'">点我修改姓名</button>
  <button @click="person.age++">点我修改年龄</button>
  <button @click="person.job.j1.salary++">点我修改薪资</button>
</template>

<script>
import { ref, reactive, watch } from "vue";
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
      watch 监视ref响应式数据  三个参数 第一个是监视的ref响应式数据 如果要监视多个就写成数组 
      第二个参数是回调函数 数据发生变化时调用 回调有两个参数 newValue 和 oldValue
      第三个参数是配置对象 可以配置 immediate 和 deep 配置项
    */
    /*     watch([sum,msg], (newVluae,oldValue) => {
      console.log(newVluae,oldValue)
    }, { immediate: true }); */

    /* 
    watch 监视ref响应式数据
    情况一:直接监视 reactive包裹的响应式数据(对象) 深度监视无法设置强制为true开启，另外 oldValue 无法拿到
    */
    // watch(person, (newValue, oldValue) => {
    //   console.log(newValue, oldValue)
    // }, {})

    // 情况二:直接监视 reactive包裹的响应式数据里的属性(对象里的对象) 深度监视无法设置强制为true开启，另外 oldValue 无法拿到
    // watch(person.job,(newValue, oldValue) => {
    //     console.log(newValue, oldValue);
    //   },{immediate:true})

      // 监视多个属性就用数组包起来而要写成函数返回值形式 另外这种情况又可以拿到 oldValue 了 
        watch([() => person.name,() => person.age],(newValue, oldValue) => {
        console.log(newValue, oldValue);
      })


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