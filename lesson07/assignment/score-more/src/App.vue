<template>
  <div id="app">
    <SM_header></SM_header>
    <SM_navbar></SM_navbar>
    <router-view></router-view>
    <SM_footer></SM_footer>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import SM_header from './components/SM_header.vue'
import SM_navbar from './components/SM_navbar.vue'
import SM_footer from './components/SM_footer.vue'

export default {
  name: 'App',
  components: {
    SM_header,
    SM_navbar,
    SM_footer,
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
  /* margin-top: 60px; */
}
</style>
