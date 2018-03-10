<template>
  <div class="homeView">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'homeView'
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .homeView{
    height: 100%;
  }
</style>
