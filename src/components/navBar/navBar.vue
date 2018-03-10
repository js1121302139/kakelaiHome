<template>
  <div class="clearfix" :class="{navModelMobBlack : blackNav}">
    <div class="row navModel hidden-sm hidden-xs">
      <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">
        <img class="logo" src="./img/logo.png" alt="">
      </div>
      <div class="col-lg-8 col-md-8 col-sm-8 col-xs-8 pull-right navs">
        <div class="navsItem"
             @click="change(item)"
             @mouseover="showDowApp(item)"
             @mouseout="showDowApp(item)"
             :class="{active : item.active}"
             :key="item.txt"
             v-for="item in navBar">
          <router-link :to="{name:`${item.name}`}" v-text="item.txt">首页</router-link>
          <div class="donwLoad" v-if="showDow && item.name==='AppDow'">
          </div>
        </div>
      </div>
    </div>
    <div class="navModelMob hidden-md hidden-lg clearfix" :class="{ active : showFun }">
      <div class="funClass" v-if="!showFun">
        <img src="./img/logo.png" alt="">
        <img class="funBtn" src="./img/funBtn.png" @click.stop="showNav" alt="">
      </div>
      <div class="funClass" v-if="showFun">
        <img src="./img/logoActive.png" alt="">
        <img src="./img/closeBtn.png" @click.stop="showNav" class="funBtn" alt="">
      </div>
      <div class="navs" v-if="showFun">
        <div class="navsItem"
             @click="change(item)"
             :class="{active : item.active}"
             :key="item.txt"
             v-for="item in navBar">
          <router-link :to="{name:`${item.name}`}" v-text="item.txt">首页</router-link>
        </div>
      </div>
    </div>

    <div class="mask" v-if="showFun">
    </div>
  </div>
</template>

<script>
  export default {
    name: '',
    data () {
      return {
        showFun: false,
        blackNav: '',
        showDow: false,
        navBar: [
          {
            txt: '首页',
            active: true,
            name: 'Home'
          }, {
            txt: '功能与服务',
            active: false,
            name: 'Service'
          }, {
            txt: '商务合作',
            active: false,
            name: 'Cooperation'
          }, {
            txt: '帮助中心',
            active: false,
            name: 'HelpCenter'
          }, {
            txt: '关于我们',
            active: false,
            name: 'AboutUs'
          },
          {
            txt: 'APP下载',
            active: false,
            name: 'AppDow'
          }
        ]
      }
    },
    created () {
      window.onscroll = (e) => {
        this.blackNav = document.documentElement.scrollTop > 100;
      }
    },
    methods: {
      showNav () {
        this.showFun = !this.showFun
        console.log('111')
      },
      showDowApp (item) {
        if (item.name === 'AppDow') {
          this.showDow = !this.showDow
        }
      },
      change (item) {
        this.navBar.map((items) => {
          items.active = false
        })
        if (item.name !== 'Home') {
          this.blackNav = true
        } else {
          this.blackNav = false
        }
        item.active = !item.active
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .navModel {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;
    height: 80px;
    width: 1200px;
    line-height: 80px;
    margin: 0 auto;
    & > div {
      height: 100%;
      .logo {
        display: inline-block;
        width: 128px;
        height: 50px;
      }
    }
    .donwLoad {
      position: absolute;
      left: -200px;
      right: 0;
      margin: 0 auto;
      width: 450px;
      height: 275px;
      background: url("./img/dowLoad.png") top left no-repeat;
      background-size: 100% 100%;
    }
    .navs {
      display: flex;
      height: 100%;
      .navsItem {
        position: relative;
        height: 100%;

        a {
          position: relative;
          padding: 0 21px 11px;
          color: #fff;
          font-size: 16px;
          text-decoration: none;
          &:after {
            transition: all .5s;
          }
        }
      }
      .navsItem:first-child {
        margin-right: 10px;
      }
      .router-link-active {
        &:after {
          position: absolute;
          left: 0;
          bottom: 0;
          right: 0;
          margin: 0 auto;
          content: "";
          display: inline-block;
          width: 64px;
          height: 4px;
          background: #fff;
        }
      }
    }
  }

  .navModelMobBlack {
    position: fixed;
    width: 100%;
    height: 80px;
    background: black;
    z-index: 99999;
  }

  @media screen and (max-width: 750px) {
    .mask {
      position: fixed;
      height: 100%;
      width: 100%;
      background: #000000;
      opacity: 0.6;
      top: 0;
      bottom: 0;
      z-index: 998;
    }

    .active {
      background: #fff !important;
    }

    .navModelMob {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 999;
      padding: 0 7px 0 12px;
      width: 100%;
      background: #000;
      .funClass {
        height: 43px;
        line-height: 43px;
        img {
          display: inline-block;
          width: 85px;
          height: 35px;
        }
        .funBtn {
          margin-top: 11px;
          float: right;
          width: 22px;
          height: 22px;
        }
      }
      .navs {
        display: flex;
        flex-direction: column;
        .navsItem {
          height: 50px;
          line-height: 50px;
          a {
            text-decoration: none;
            position: relative;
            font-size: 15px;
            color: #333;
          }
          .router-link-active {
            &:after {
              position: absolute;
              left: 0;
              bottom: -3.5px;
              margin: 0 auto;
              content: "";
              display: inline-block;
              width: 30px;
              height: 2px;
              background: #D7B374;
            }
          }
        }

      }
    }
  }
</style>
