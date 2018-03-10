<template>
  <div class="footer">
    <div class="container">
      <div class="row footerCenter">
        <div class="col-xs-12 col-sm-12 col-md-2 col-lg-2 aboutTxt text-center">
          <p class="about">关于企业</p>
          <p class="subAbout">About the enterprise</p>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-10 col-lg-10 enterpriseInfo">
          <div class="enterpriseLeft">
            <p class="enterpriseName">福建华灿网络科技有限公司</p>
            <div class="enterpriseInfoItem">
              <img src="./img/address.png" alt="">
              <span>福州市台江区曙光路130号 申发大厦27楼</span>
            </div>
            <div class="enterpriseInfoItem">
              <img src="./img/tel.png" alt="">
              <span>客服电话:400-699-6171</span>
            </div>
            <div class="enterpriseInfoItem">
              <img src="./img/email.png" alt="">
              <span>邮箱:pr@duikavip.com</span>
            </div>
          </div>
          <div class="enterpriseQrcode pull-left">
            <img class="hidden-md hidden-lg" src="./img/dkQrcode.png" alt="">
            <div class="hidden-xs hidden-sm dn">
              <img src="./img/dkQrcode.png" alt="">
              <p>扫一扫关注咖客来微信公众号</p>
            </div>
          </div>
        </div>
      </div>
      <p class="copyright text-center">
        Copyright 2016 yunduiwang Inc.,All rights reserved.闽ICP备16023415号-1
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: '',
    data () {
      return {}
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .footer {
    height: 276px;
    background: #000;
    padding-top: 44px;
    .aboutTxt {
      font-size: 30px;
      color: #fff;
      .about {
        font-size: 30px;
      }
      .subAbout {
        font-size: 12px;
      }
    }
    .enterpriseInfo {
      color: #fff;
      display: flex;
      flex: 1;
      justify-content: space-between;
      .enterpriseName {
        font-size: 22px;
        margin-bottom: 37px;
      }
      .dn{
        display: flex;
        flex: 1;
        flex-direction: column;
        align-items: center;
        img{
          width: 134px;
          height: 134px;
          margin-bottom: 10px;
        }
      }
      .enterpriseInfoItem {
        margin-bottom: 8px;
        img {
          width: 28px;
          height: 28px;
        }
        span {
          font-size: 11px;
        }
      }
    }
    .copyright {
      margin-top: 44px;
      font-size: 12px;
      line-height: 17px;
      color: #CCCCCC;
      margin: 0;
    }
  }
  @media screen and (max-width: 1200px) {
    .enterpriseInfo {
      margin-bottom: 34px;
    }
  }
  @media screen and (max-width: 750px) {
    .footer {
      padding: 0 12px;
      /*height: 190px;*/
      background: #000;
      .aboutTxt {
        padding-top: 20px;
        font-size: 18px;
        .subAbout {
          font-size: 8px;
        }
      }
      .enterpriseInfo {
        display: flex;
        flex: 1;
        justify-content: space-between;
        margin-bottom: 10px;
        .enterpriseQrcode{
          display: flex;
          flex: 1;
          flex-direction: column;
          align-items: flex-end;
          img{
            width: 65px;
            height: 65px;
          }
        }
        .enterpriseLeft {
          color: #fff;
          .enterpriseName {
            font-size: 14px;
            margin-bottom: 12px;
          }
          .enterpriseInfoItem {
            margin-bottom: 10px;
            img {
              width: 14px;
              height: 14px;
            }
            span {
              font-size: 11px;
            }
          }
        }
      }
    }

    .copyright {
      font-size: 9px;
      line-height: 17px;
      color: #fff;
      margin: 0;
    }
  }
</style>
