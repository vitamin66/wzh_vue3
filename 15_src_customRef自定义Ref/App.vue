<template>
  <input type="text" v-model="keyWord" />
  <h4>{{ keyWord }}</h4>
</template>

<script>
import { customRef } from "vue";
export default {
  name: "App",

  setup() {
    function myRef(value) {
      let timer;
      // 先调用 customRef 参数是一个函数且需要return 然后函数可以接收两个参数 track(追踪) 和 trigger (通知Vue重新解析模板)在里面写自定义ref 的逻辑
      // 自定义 ref 要写 get set 并且get 要有返回值 myRef 也要有返回值
      return customRef((track, trigger) => {
        return {
          get() {
            track(); // 提前告知get 追踪value
            return value;
          },
          set(newValue) {
            clearTimeout(timer);
            timer = setTimeout(() => {
              value = newValue;
              trigger(); // 通知vue 重新解析模板
            }, 500);
          },
        };
      });
    }

    // let keyWord = ref('hello') // vue 提供的 ref
    let keyWord = myRef("hello"); // 通过 customRef 自定义一个 myRef

    return {
      keyWord,
    };
  },
};
</script>
