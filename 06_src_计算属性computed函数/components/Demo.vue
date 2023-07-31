<template>
  姓: <input type="text" v-model="data.person.firstName" />
  <br />
  名: <input type="text" v-model="data.person.lastName" />
  <br />
  <span>全名:{{ data.person.fullName }}</span><br>
  全名：<input type="text" v-model="data.person.fullName">
</template>

<script>
import { reactive, computed } from "vue";
export default {
  name: "MyDemo",
  setup() {
    let data = reactive({
      person: {
        firstName: "张",
        lastName: "三",
      },
    });

    // vue3中的计算属性-简写 (不考虑写 只能读，因为简写无法配置 set)
    // data.person.fullName = computed(() => {
    //   return data.person.firstName + "-" + data.person.lastName;
    // });

    // vue3中的计算属性-完成写法 (不考虑写 只能读，因为简写无法配置 set)
    data.person.fullName = computed({
      get() {
        return data.person.firstName + "-" + data.person.lastName;
      },
      set(value) {
        const nameArr = value.split("-");
        console.log(value.split("-"))
        data.person.firstName = nameArr[0];
        data.person.lastName = nameArr[1];
      },
    });

    return {
      data,
    };
  },
};
</script>

<style>
</style>