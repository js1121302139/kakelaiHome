<template>
  <div class="Banner" ref="banner" @mouseover="hoverImg()" @mouseout="outImg()" :style="`height:${height}px;`">
    <div class="bannerContainer" ref="container">
      <div class="bannerImg" :key="item" v-for="item in bannerImg">
        <img :key="item" :style="'width:'+windowWidth+'px'" :src="item" alt="">
      </div>
    </div>
    <div class="bannerNum" v-if="isShowNum">
      <span :key="item" :class="{active : nowImgIndex==key}" @click.stop="nextImg(key)"
            v-for="(item, key) in bannerImg"></span>
    </div>
  </div>
</template>

<script>
  export default {
    name: '',
    props: {
      bannerImg: {
        type: Array
      },
      isShowNext: {
        type: Boolean,
        default: true
      },
      isShowNum: {
        type: Boolean,
        default: true
      },
      height: {
        type: Number,
        default: 600
      },
      eventName: {
        type: String,
        default: 'next'
      },
      nextIndex: {
        type: Number
      }
    },
    data () {
      return {
        windowWidth: 0,
        containerWidth: 0,
        nowImgIndex: 0,
        bannerNum: 0,
        transform: 0,
        timer: ''
      }
    },
    created () {
      this.bannerNum = this.bannerImg.length
      this.containerWidth = this.windowWidth * this.bannerNum
    },
    methods: {
      hoverImg () {
        clearInterval(this.timer)
      },
      outImg () {
        this.init()
      },
      setTransform () {
        this.$refs.container && this.$refs.container.setAttribute('style', `width:${this.containerWidth}px; transform: translate3d(${this.transform}px,0,0);`)
      },
      init () {
        this.timer = setInterval(() => {
          this.nowImgIndex++
          if (this.nowImgIndex >= this.bannerNum) {
            this.nowImgIndex = 0
            this.transform = this.windowWidth * this.nowImgIndex
          } else {
            this.transform = this.windowWidth * -this.nowImgIndex
          }
          this.setTransform()
          this.$emit(this.eventName, this.nowImgIndex)
        }, 2000)
      },
      nextImg (key) {
        if (key > this.nowImgIndex || this.transform) {
          this.transform = this.windowWidth * -key
        } else {
          this.transform = this.windowWidth * key
        }
        this.nowImgIndex = key
        this.setTransform()
        this.$emit('add', this.nowImgIndex)
      }
    },
    mounted () {
      this.windowWidth = this.$refs.banner.clientWidth
      this.init()
      this.setTransform()
    },
    watch: {
      nextIndex: function (val) {
        if (val < this.bannerNum && val >= 0) {
          this.nextImg(val)
          clearInterval(this.timer)
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .Banner {
    position: relative;
    overflow: hidden;
    display: flex;
    .bannerContainer {
      position: relative;
      display: flex;
      flex: 1;
      transition: all 1s ease-out;
      .bannerImg {
        flex: 1;
        width: 100%;
        height: 100%;
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
      bottom: 22px;
      justify-content: center;
      span {
        display: inline-block;
        width: 44px;
        height: 4px;
        margin-right: 12px;
        background: #8d8b89;
        transition: all 0.5s;
      }
      .active {
        background: #fff;
      }
    }
  }
</style>
