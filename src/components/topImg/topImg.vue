<template>
  <div class="topImg" :style="`height:${height}px`">
    <img :src="imgSrc" alt="">
  </div>
</template>

<script>
  export default {
    name: '',
    props: {
      height: {
        type: Number,
        default: 500
      },
      imgSrc: {
        type: String,
        default: ''
      }
    },
    data () {
      return {}
    },
    created () {
      console.log(this.imgSrc)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .topImg {
    width: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
</style>
