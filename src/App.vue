<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <GetItemTestVue/>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
import GetItemTestVue from './components/GetItemTest.vue'
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data() {
    return {};
  },
  components: {
    // HelloWorld,
    GetItemTestVue
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
