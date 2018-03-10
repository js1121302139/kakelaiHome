<template>
  <div class="cooperation">
    <TopImg :height="500" :imgSrc="imgUrl"></TopImg>
    <div class="screen">
      <img src="./img/aboutUs.png" class="hidden-xs hidden-sm" alt="">
      <img src="./img/aboutUsMobile.png" class="hidden-md hidden-lg" alt="">
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import TopImg from '../../components/topImg/topImg.vue'
  import Footer from '../../components/footer/footer.vue'

  export default {
    name: 'cooperation',
    components: {
      TopImg,
      Footer
    },
    data () {
      return {
        imgUrl: ''
      }
    },
    created () {
      this.imgUrl = require('./img/aboutUsBg.png')
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .screen {
    width: 1200px;
    margin: 0 auto;
  }

  @media screen and (max-width: 750px) {
    .topImg{
      height: 200px !important;
    }
    .screen {
      width: 100%;
      margin: 0 auto;
      img {
        width: 100%;
      }
    }
  }
</style>
