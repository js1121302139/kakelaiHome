<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import navBar from './components/navBar/navBar.vue';
export default {
  name: 'App',
  data () {
    return {
      navBar
    };
  }
};
</script>

<style lang="less">
  @import "reset.css";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
