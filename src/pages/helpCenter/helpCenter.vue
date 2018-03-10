<template>
  <div class="helpCenter">
    <div class="screen">
      <h1 class="Tit">帮助中心</h1>
      <div class="dropList">
        <DropItem :key="i" v-for="i in 10"></DropItem>
      </div>
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
  import TopImg from '../../components/topImg/topImg.vue'
  import DropItem from '../../components/dropItem/dropItem.vue'
  import Footer from '../../components/footer/footer.vue'

  export default {
    name: 'helpCenter',
    components: {
      TopImg,
      Footer,
      DropItem
    },
    data () {
      return {
        imgUrl: ''
      }
    },
    created () {
      this.imgUrl = require('./img/helpCenter.png')
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .helpCenter {
    background: #f8f8f8;
    .screen{
      width: 1200px;
      margin: 0 auto;
    }
    padding-top: 80px;
    .Tit {
      height: 82px;
      line-height: 82px;
      margin: 0;
    }
    .dropList {
      padding: 53px 0 58px 28px;
      background: #fff;
      margin-bottom: 40px;
    }
  }
  @media screen and (max-width: 750px) {
    .helpCenter {
      padding-top: 80px;
      background: #f8f8f8;
      .screen{
        width: 100%;
        margin: 0 auto;
      }
      .Tit {
        height: 44px;
        line-height: 44px;
        font-size: 20px;
        text-indent: 14px;
        margin: 0;
        color: #000;
        background: #fff;
        border-bottom: 1px solid #D8d8d8;
      }
      .dropList {
        padding: 0 12px;
        margin-bottom: 0;
        background: #fff;
      }
    }
  }
</style>
