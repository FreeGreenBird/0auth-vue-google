<template>
  <div id="app">
    <GoogleAuth msg="Google APIs example - oAuth2"/>
  </div>
</template>

<script>
import GoogleAuth from './components/GoogleAuth.vue'

export default {
  name: 'App',
  components: {
    GoogleAuth
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
