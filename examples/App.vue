<template>
  <div id="app">
    <div class="test-wrap">
      <InputCar @submit="submit"></InputCar>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
  methods: {
    submit(value) {
      console.log(value)
    }
  }
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}
.test-wrap {
  width: 70%;
}
</style>
