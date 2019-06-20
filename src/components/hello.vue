<template>
  <div>
    <h1>Hello World!111</h1>
    <button @click="btn">按钮</button>
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    console.log("眭刚22222");
  },
  methods:{
      btn(){
          console.log(123333444555);
      }
  }
};
</script>

<style lang='less' scoped>
@clolor:red;
html,
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-size: 16px;
}
h1 {
  display: flex;
  color: @clolor;
}
</style>