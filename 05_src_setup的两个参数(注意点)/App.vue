<template>
  <Demo @hello="showAge" msg="hello" />
</template>

<script>
import Demo from "./components/Demo.vue";
export default {
  name: "App",
  components: { Demo },

  setup() {
    function showAge(value) {
      alert(`接收到了数据${value}`);
      console.log(value)
    }
    return {
      showAge,
    };
  },
};
</script>
