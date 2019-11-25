<template>
  <div id="app">
    <div class="wrap">
      <div class="test-wrap">
        <InputCar @submit="submit"></InputCar>
        <div>测试</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
  methods: {
    submit(value) {
      console.log(value);
    }
  }
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  overflow: scroll;
}
.wrap {
  padding-top: 500px;
  /* height: 100vh; */
}

</style>
