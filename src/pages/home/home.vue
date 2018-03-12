<template>
  <div class="Home">
    <Banner
      v-if="mob"
      @add="incrementTotal"
      :bannerImg="topImg"
      :isShowNext='true'
      :isShowNum='true'
      :height="600"
    ></Banner>
    <Banner
      v-if="!mob"
      :bannerImg="mobTopImg"
      @add="incrementTotal"
      :isShowNext='true'
      :isShowNum='true'
      :height="264"
    ></Banner>
    <div class="row screen  clearfix">
      <div class="screen1">
        <screenTit tit="痛点解决" subTit="你们所忧虑的真是我们所解决的" titColor="#000" subColor="#666"></screenTit>
        <div class="screen1Info clearfix">
          <div class="visible-xs visible-sm col-sm-12 col-xs-12 col-md-12 col-lg-12 text-center">
            <img src="./img/tongdian.png" class="mobileImg" alt="">
          </div>
          <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <ol class="row">
              <li class="col-sm-6 col-xs-6 col-md-12 col-lg-12">怎么让更多人知道我?</li>
              <li class="col-sm-6 col-xs-6 col-md-12 col-lg-12">新客户哪里来?</li>
              <li class="col-sm-6 col-xs-6 col-md-12 col-lg-12">老客户如何维护?</li>
              <li class="col-sm-6 col-xs-6 col-md-12 col-lg-12">客单价怎么提高？</li>
              <li class="col-sm-6 col-xs-6 col-md-12 col-lg-12">门店要做什么活动？</li>
              <li class="col-sm-6 col-xs-6 col-md-12 col-lg-12">活动怎么做?</li>
              <li class="col-sm-6 col-xs-6 col-md-12 col-lg-12">活动怎么推广？</li>
              <li class="col-sm-6 col-xs-6 col-md-12 col-lg-12">会员怎么管理？</li>
              <li class="col-sm-6 col-xs-6 col-md-12 col-lg-12">如何提高员工积极性?</li>
            </ol>
          </div>
          <div class="visible-md visible-lg col-xs-12 col-sm-12 col-md-8 col-lg-8 pull-right">
            <img src="./img/tongdian.png" class="pull-right" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="row screen screen2Bg">
      <div class="screen2">
        <screenTit tit="核心功能" subTit="协助商家实现营业额100%增长" titColor="#fefefe" subColor="#fefefe"></screenTit>
        <div class="screen2Info clearfix text-center">
          <div class="col-xs-6 col-sm-6 col-md-4 col-lg-4">
            <div class="infoItem">
              <img class="infoIco" src="./img/ppbg-ico.png" alt="">
              <p class="tit">品牌曝光</p>
              <p class="subTit">品牌故事包装,平台前端展示,百万精准流量曝</p>
            </div>
          </div>
          <div class="col-xs-6 col-sm-6 col-md-4 col-lg-4">
            <div class="infoItem">
              <img class="infoIco" src="./img/zdyl-ico.png" alt="">
              <p class="tit">自动引流</p>
              <p class="subTit">拓客宝、推广宝等自动吸粉工具,精准引流。异业联盟,互助导流</p>
            </div>
          </div>
          <div class="col-xs-6 col-sm-6 col-md-4 col-lg-4">
            <div class="infoItem">
              <img class="infoIco" src="./img/tsfg-ico.png" alt="">
              <p class="tit">提升复购</p>
              <p class="subTit">六大神器,提高会员粘合度及忠 诚度,提升二次消费率</p>
            </div>
          </div>
          <div class="col-xs-6 col-sm-6 col-md-4 col-lg-4">
            <div class="infoItem">
              <img class="infoIco" src="./img/hyyx-ico.png" alt="">
              <p class="tit">会员营销</p>
              <p class="subTit">拓客宝、推广宝等自动吸粉工具,精准引流。异业联盟,互助导流</p>
            </div>
          </div>
          <div class="col-xs-6 col-sm-6 col-md-4 col-lg-4">
            <div class="infoItem">
              <img class="infoIco" src="./img/yyhd-ico.png" alt="">
              <p class="tit">运营活动</p>
              <p class="subTit">拓客宝、推广宝等自动吸粉工具,精准引流。异业联盟,互助导流</p>
            </div>
          </div>
          <div class="col-xs-6 col-sm-6 col-md-4 col-lg-4">
            <div class="infoItem">
              <img class="infoIco" src="./img/yggl-ico.png" alt="">
              <p class="tit">员工管理</p>
              <p class="subTit">拓客宝、推广宝等自动吸粉工具,精准引流。异业联盟,互助导流</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row screen screen3Bg">
      <div class="screen3">
        <screenTit tit="互动数据" subTit="我们的成绩用数据说话" titColor="#fefefe" subColor="#fefefe"></screenTit>
        <div class="screen3 text-center clearfix">
          <div class="col-xs-6 col-sm-6 col-md-3 col-lg-3">
            <div class="dataTop">
              <img src="./img/data4-ico.png" alt="">
              <div class="dataInfo">
                <p class="num">230+</p>
                <p class="dataBottom">入驻商家</p>
              </div>
            </div>
          </div>
          <div class="col-xs-6 col-sm-6 col-md-3 col-lg-3">
            <div class="dataTop">
              <img src="./img/data3-ico.png" alt="">
              <div class="dataInfo">
                <p class="num">131,668,352+</p>
                <p class="dataBottom">交易总额</p>
              </div>
            </div>
          </div>
          <div class="hidden-lg hidden-md col-xs-6 col-sm-6 col-md-3 col-lg-3">
            <div class="dataTop">
              <img src="./img/data1-ico.png" alt="">
              <div class="dataInfo">
                <p class="num">150%</p>
                <div class="dataBottom">营业额提升</div>
              </div>
            </div>
          </div>
          <div class="col-xs-6 col-sm-6 col-md-3 col-lg-3">
            <div class="dataTop">
              <img src="./img/data2-ico.png" alt="">
              <div class="dataInfo">
                <p class="num">38,572,663+</p>
                <p class="dataBottom">粉丝互动</p>
              </div>
            </div>
          </div>
          <div class="hidden-sm hidden-xs col-xs-6 col-sm-6 col-md-3 col-lg-3">
            <div class="dataTop">
              <img src="./img/data1-ico.png" alt="">
              <div class="dataInfo">
                <p class="num">150%</p>
                <div class="dataBottom">营业额提升</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row screen screen4Bg">
      <div class="screen4">
        <screenTit tit="成功案例" subTit="他们都在用，你还在等？ " titColor="#000" subColor="#666"></screenTit>
        <div class="nextBanner">
          <img @click="next('after')" src="./img/afterBtn-ico.png" alt="">
          <img @click="next('before')" src="./img/beforeBtn-ico.png" alt="">
        </div>
        <Banner v-if="!mob"
                @sj="sj"
                eventName="sj"
                :bannerImg="pcbottomImg"
                :nextIndex="nextIndex"
                :isShowNext='true'
                :isShowNum='true'
                :height="480"></Banner>
        <Banner v-if="mob"
                @dn="dn"
                :nextIndex="nextIndex"
                :bannerImg="mobbottomImg"
                eventName="dn"
                :isShowNext='true'
                :isShowNum='false'
                :height="406"></Banner>
      </div>
    </div>
    <div class="row screen screen5Bg">
      <div class="screen5">
        <screenTit tit="合作品牌" subTit="20000+商户的共同选择" titColor="#000" subColor="#666"></screenTit>
        <div class="pp hidden-xs hidden-sm">
          <img src="./img/pp-bg.png" alt="">
        </div>
        <div class="pp hidden-md hidden-lg">
          <img src="./img/mobpp.png" alt="">
          <img src="./img/mobpp1.png" alt="">
        </div>

      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
  import { mapGetters, mapActions, mapState } from 'vuex'
  import navBar from '../../components/navBar/navBar.vue'
  import Banner from '../../components/banner/banner.vue'
  import Footer from '../../components/footer/footer.vue'
  import screenTit from '../../components/screenTit/screenTit.vue'
  import TopBanner from './img/TopBanner.png'
  import mobTopBanner from './img/mobTopBanner.png'
  import PcBanner1 from './img/1.png'
  import PcBanner2 from './img/2.png'
  import PcBanner3 from './img/3.png'
  import mobBanner4 from './img/4.png'
  import mobBanner5 from './img/5.png'
  import mobBanner6 from './img/6.png'

  export default {
    components: {
      Banner,
      navBar,
      screenTit,
      Footer
    },
    name: '',
    data () {
      return {
        index: 0,
        mob: 0,
        nextIndex: 0,
        topImg: [TopBanner],
        mobTopImg: [mobTopBanner],
        pcbottomImg: [mobBanner4, mobBanner5, mobBanner6],
        mobbottomImg: [PcBanner1, PcBanner2, PcBanner3]
      }
    },
    created () {
      this.mob = window.innerWidth > 750
      this.setWindowWidth(this.$store.state, 10000)
      console.log(this.windowWidth + 'state')
      console.log(this.getWindowWidth())
    },
    methods: {
      ...mapActions(['setWindowWidth']),
      ...mapGetters(['getWindowWidth']),
      next (type) {
        if (type === 'after') {
          this.nextIndex -= 1
        } else {
          this.nextIndex += 1
        }
        // console.log(this.nextIndex)
      },
      incrementTotal (index) {
        this.index = index
      },
      sj (index) {
//        console.log(index)
      },
      dn (index) {
        // this.nextIndex = index
//        console.log(index + 'dn')
      }
    },
    computed: {
      ...mapState(['windowWidth'])
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  div, p {
    line-height: 1;
  }

  .Home {
    margin: 0 auto;
    .screen {
      margin: 0 auto;
    }
    @media screen and (min-width: 1200px) {
      .screen1, .screen2, .screen3, .screen4, .screen5 {
        width: 1200px;
        margin: 0 auto;
      }

    }
    .screen1 {
      padding: 0 40px 38px;
      .screenTit {
        margin-top: 60px;
      }
      .screen1Info {
        margin-top: 48px;
        li {
          margin-bottom: 15px;
          font-size: 24px;
          &:before {
            margin-right: 14px;
            content: '●';
            color: #d7b374;
          }
        }
        .mobileImg {
          display: inline-block;
          width: 306px;
          height: 230px;
          margin-bottom: 12px;
        }
        img {
          width: 600px;
          height: 500px;
        }
      }
    }
    .screen2Bg {
      background: url("./img/hxgn.png") left top no-repeat;
      background-size: 100% 266px;
      .screen2 {
        padding-bottom: 37px;
        .screenTit {
          margin-top: 56px;
          margin-bottom: 91px;
        }
        .screen2Info {
          & > div {
            padding: 0 80px;
            img {
              margin-bottom: -6px;
            }
            .tit {
              margin-top: 15px;
              margin-bottom: 20px;
              font-size: 20px;
              color: #000;
            }
            .subTit {
              font-size: 14px;
              line-height: 24px;
              color: #666;
            }
          }
        }
      }
    }
    .screen3Bg {
      padding-top: 55px;
      height: 414px;
      background: url("./img/hdsj-bg.png") left top no-repeat;
      background-size: 100% 414px;
      .screen3 {
        .screenTit {
          margin-bottom: 135px;
        }
        .dataTop {
          display: flex;
          justify-content: center;
          img {
            display: inline-block;
            top: 20px;
            width: 11px;
            height: 11px;
            margin-right: 21px;
            margin-top: 15px;
          }
          .num {
            font-size: 40px;
            color: #fff;
            margin-bottom: 0;
          }
        }
        .dataBottom {
          margin-top: 10px;
          font-size: 14px;
          text-align: left;
          color: #fff;
        }
      }
    }
    .screen4Bg {
      padding-top: 61px;
      .screenTit {
        margin-bottom: 26px;
      }
      .screen4 {
        position: relative;
        .nextBanner {
          position: absolute;
          right: 10px;
          z-index: 99;
          img {
            width: 50px;
            height: 50px;
          }
        }

      }
    }
    .screen5Bg {
      padding-top: 63px;
      margin-bottom: 37px;
      .screenTit {
        margin-bottom: 35px;
      }
      .screen5 {
        .pp {
          width: 1200px;
          height: 400px;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }

    @media screen and (max-width: 750px) {
      .screen1 {
        padding: 0;
        .screenTit {
          margin-top: 20px;
          margin-bottom: -10px;
        }
        .screen1Info {
          margin-top: 0;
          padding: 0 0px;
          height: 230px;
          ol {
            margin-bottom: 0;
            li {
              font-size: 14px;
              margin-bottom: 10px;
            }
          }
        }
      }

      .screen2Bg {
        background-size: 100% 133px;
        padding-bottom: 16.5px;
        .screen2 {
          padding: 0 2px;
          .screenTit {
            margin-top: 18px;
            margin-bottom: 56px;
          }
          .screen2Info {
            & > div {
              padding: 0 7px;
              img {
                width: 49px;
                height: 49px;
                margin-bottom: 0;
              }
              .tit {
                margin-bottom: 10px;
                font-size: 14px;
              }
              .subTit {
                font-size: 11px;
              }
            }
          }
        }
      }

      .screen3Bg {
        padding-top: 20px;
        height: 207px;
        background: url("./img/hdsj-bg.png") left top no-repeat;
        background-size: 100% 207px;
        .screen3 {
          .screenTit {
            margin-bottom: 38.5px;
          }
          .dataTop {
            display: flex;
            justify-content: flex-start;
            img {
              display: inline-block;
              top: 20px;
              width: 11px;
              height: 11px;
              margin-right: 21px;
              margin-top: 7px;
            }
            .num {
              font-size: 20px;
              color: #fff;
              margin-bottom: 13px;
            }
          }
          .dataBottom {
            margin-top: 10px;
            font-size: 7px;
            text-align: left;
            color: #fff;
          }
        }
      }

      .screen5Bg {
        padding-top: 15px;
        margin-bottom: 7px;
        .screenTit {
          margin-bottom: 24px;
        }
        .screen5 {
          padding: 0 44px;
          .pp {
            width: 100%;
            height: 400px;
            img {
              width: 100%;
              height: 200px;
            }
          }
        }
      }
    }

  }
</style>
