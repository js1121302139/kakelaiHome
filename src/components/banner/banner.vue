<template>
  <div class="Banner">
    <div class="bannerContainer" ref="container">
      <div class="bannerImg" :key="item" v-for="item in bannerImg">
        <img :key="item" :style="'width:'+windowWidth+'px'" :src="item" alt="">
      </div>
    </div>
    <div class="bannerNum">
      <span :key="item" @click="nextImg(key)" v-for="(item, key) in bannerImg"></span>
    </div>
    {{transform}}
  </div>
</template>

<script>
  export default {
    name: '',
    data () {
      return {
        windowWidth: 0,
        bannerImg: ['http://pic29.photophoto.cn/20131204/0034034499213463_b.jpg', 'http://pic29.nipic.com/20130514/12477194_083818249176_2.jpg'],
        isShowNext: true,
        isShowNum: true,
        containerWidth: 0,
        nowImgIndex: 0,
        bannerNum: 0,
        transform: 0
      };
    },
    created () {
      this.bannerNum = this.bannerImg.length;
      this.windowWidth = window.innerWidth;
      this.containerWidth = this.windowWidth * this.bannerNum;
    },
    methods: {
      nextImg (key) {
        this.nowImgIndex = key - this.bannerNum <= 0 ? 0 : key - this.bannerNum;
        this.transform = this.nowImgIndex * this.containerWidth;
        this.$refs.container.setAttribute('style', `width:${this.containerWidth}px;transform: translate3d(${this.transform}px,0,0);`);
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  .Banner {
    position: relative;
    overflow: hidden;
    display: flex;
    height: 50px;
    .bannerContainer {
      position: relative;
      display: flex;
      flex: 1;
      transition: all 0.25s;
      .bannerImg {
        flex: 1;
        width: 100%;
        height: 50px;
        background: #f00;
        img {
          display: block;
          width: 100%;
          height: 100%;
        }
      }
    }
    .bannerNum {
      position: absolute;
      z-index: 9;
      display: flex;
      flex: 1;
      width: 100%;
      bottom: 10px;
      justify-content: center;
      span {
        display: inline-block;
        width: 10px;
        height: 2px;
        margin-right: 10px;
        background: #f00;
      }
    }
  }
</style>
