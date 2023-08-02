<template>
  <h2>姓名{{ person.name }}</h2>
  <h2>姓名{{ person.age }}</h2>
  <h2>薪资{{ person.job.j1.salary }}</h2>
  <button @click="person.name += '~'">点我修改姓名</button>
  <button @click="person.age++">点我修改年龄</button>
  <button @click="person.job.j1.salary++">点我修改薪资</button>
  <hr />
  <h2 v-show="person.car">汽车信息{{ person.car }}</h2>
  <button @click="showCar">点我展示汽车信息</button>
  <button v-show="person.car" @click="person.car.name += '!'">
    修改汽车品牌
  </button>
  <button v-show="person.car" @click="person.car.price++">修改汽车价格</button>
</template>

<script>
import { markRaw, reactive } from "vue";
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

    // toRaw 可以把一个 reactive 管理的响应式对象数据变回 普通对象数据
    // person = toRaw(person)

    function showCar() {
      // markRaw 可以标记一个对象 让其永远无法成为响应式数据 这里有 bug ！！！
      let car = { carname: "奔驰", price: 40 };
      person.car = markRaw(car);
    }

    return {
      person,
      showCar,
    };
  },
};
</script>
