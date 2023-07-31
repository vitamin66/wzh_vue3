<template>
  <h1>初识setup</h1>
  <h2>{{ obj.name }}</h2>
  <h2>{{ obj.age }}</h2>
  <button @click="sayHolle">点我提示信息</button>
</template>

<script>
// import {h} from "vue";
export default {
  name: "App",
  // vue3 新配置 函数 setup  直接把 数据 方法都写在 里面 然后return 模板就可以用了 vue2 和 vue3 的语法配置不要混用
  setup() {
    // 数据就正常赋值变量写法即可 数据要写成对象 然后return 出去
    let obj = {
      name: "zs",
      age: 22,
    };

    // setup 里写方法要加  function 关键词
    function sayHolle() {
      alert("哈哈啊哈");
    }

    // 返回一个对象 只有返回了模板中才可以用
    return {
      obj,
      sayHolle,
    };

    // setup 还可以返回一个渲染函数  如果返回渲染函数 那么整个 模板的内容都将被替换成渲染函数里的内容
    // return () => h("h1", "哈哈啊哈");
  },
};
</script>
