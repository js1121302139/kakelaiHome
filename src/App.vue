<template>
  <div id="app">
    <navBar></navBar>
    <router-view/>
  </div>
</template>

<script>
import navBar from './components/navBar/navBar.vue';
export default {
  name: 'App',
  components: {
    navBar
  },
  data () {
    return {
    };
  }
};
</script>

<style lang="less">
  @import "reset.css";
  @import "../static/bootstrap.min.css";
  @import "../static/bootstrap-theme.min.css";
  body{
    overflow-x: hidden;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }
</style>
