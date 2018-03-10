<template>
  <!--功能与服务-->
  <div class="service">
    <Service :height="500" :imgSrc="imgUrl"></Service>
    <div class="hidden-xs hidden-sm container serviceImg">
      <img src="./img/serviceTop.jpg" alt="">
      <img src="./img/serviceBottom.jpg" alt="">
    </div>
    <div class="hidden-md hidden-lg serviceImg">
      <img src="./img/mobile1.jpg" alt="">
      <img src="./img/mobile2.jpg" alt="">
      <img src="./img/mobile3.jpg" alt="">
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import Service from '../../components/topImg/topImg.vue'
  import Footer from '../../components/footer/footer.vue'

  export default {
    components: {
      Service,
      Footer
    },
    name: 'service',
    data () {
      return {
        imgUrl: ''
      }
    },
    created () {
      this.imgUrl = require('./img/serviceBg.png')
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .serviceImg {
    img {
      width: 1200px;
    }
  }

  @media screen and (max-width: 750px) {
    .service {
      .topImg {
        height: 200px !important;
      }
      .serviceImg {
        padding: 0 12px;
        img {
          width: 100%;
        }
      }
    }

  }
</style>
