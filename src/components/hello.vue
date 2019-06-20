<template>
  <div>
    <h1>Hello World!11123333444</h1>
    <button @click="btn">按钮</button>
    <img  src="@/asset/img/1.png"/>
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    console.log("眭刚22222333");
  },
  methods:{
      btn(){
          this.test();
          console.log(12333344455566677755);
      }
  }
};
</script>

<style lang='less' scoped>
@clolor:pink;
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