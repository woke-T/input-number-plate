<template>
  <div id="app">
    <InputCar class="input-car" @submit="submit" @input="input"></InputCar>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
  methods: {
    submit (value) {
      console.log(value)
    },
    input (value) {
      console.log(value)
    }
  }
};
</script>

<style scoped>
html,
body {
  margin: 0;
  padding: 0;
}
.input-car {
  height: 60px;
}
</style>
