<template>
  <!--商务合作-->
  <div class="cooperation">
    <TopImg :height="500" :imgSrc="imgUrl"></TopImg>
    <div class="hidden-xs hidden-sm contener container text-center">
      <img src="./img/serviceContenerbg.png" alt="">
    </div>
    <div class="hidden-md hidden-lg contener text-center">
      <img src="./img/mobileBg.png" alt="">
    </div>
    <img class="infoTitBg" src="./img/infoTitBg.png" alt="">
    <div class="container  text-center">
      <div class="joinUs">
        <div class="form">
          <div class="row">
            <div class="col-xs-3 col-sm-3 col-md-2 col-lg-2 labName">姓名：<span></span></div>
            <div class="col-xs-9 col-sm-9 col-md-10 col-lg-10">
              <input type="text" placeholder="请输入姓名">
            </div>
          </div>
          <div class="row">
            <div class="col-xs-3 col-sm-3 col-md-2 col-lg-2 labName">联系方式：<span></span></div>
            <div class="col-xs-9 col-sm-9 col-md-10 col-lg-10">
              <input type="text" placeholder="请输入姓名">
            </div>
          </div>
          <div class="row">
            <div class="col-xs-3 col-sm-3 col-md-2 col-lg-2 labName">店铺名称：<span></span></div>
            <div class="col-xs-9 col-sm-9 col-md-10 col-lg-10">
              <input type="text" placeholder="请输入姓名">
            </div>
          </div>
          <div class="btn">
            <button>加入我们</button>
          </div>
          <p>商务联系人</p>
          <p>郭经理：18750632806</p>
        </div>
      </div>
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
      this.imgUrl = require('./img/cooperationBg.png')
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .contener {
    padding-top: 48px;
    padding-bottom: 71px;
    img {
      display: inline-block;
    }
  }

  .infoTitBg {
    height: 166px;
  }

  .container {
    .form {
      padding: 56px 129px;
    }
    .joinUs {
      display: inline-block;
      margin-top: 60px;
      width: 972px;
      height: 512px;
      margin-bottom: 97px;
      box-shadow: 0 0 0 1px #000;
      .row {
        margin-bottom: 30px;
        & > div {
          margin: 0;
          padding: 0;
        }
        input {
          width: 585px;
          height: 40px;
        }
        .labName {
          color: #000;
          font-size: 24px;
          text-align: justify;
        }
        span {
          display: inline-block;
          padding-left: 100%;
        }
      }
    }
    .btn {
      margin-top: 34px;
      button {
        width: 184px;
        height: 40px;
        line-height: 40px;
        margin-bottom: 20px;
        font-size: 24px;
        background: #D7B374;
        color: #fff;
      }
    }
  }

  @media screen and (max-width: 750px) {
    .cooperation {
      .topImg {
        height: 200px !important;
      }
      .contener {
        padding: 0 5px;
        img {
          width: 100%;
        }
      }
      .infoTitBg {
        width: 100%;
        height: 83px;
      }
      .joinUs {
        margin-top: 30px;
        width: 320px;
        height: 256px;
        .form {
          padding: 28px 22px;
        }
        .row {
          margin: 0;
          margin-bottom: 15px;
          & > div {
            margin: 0;
            padding: 0;
          }
          input {
            width: 211px;
            height: 20px;
          }
          .labName {
            color: #000;
            font-size: 12px;
            text-align: right;
          }
          span {
            display: none;
            width: 1px;
            height: 1px;
            padding-left: 100%;
          }
        }
      }
      .btn {
        margin-top: 22px;
        button {
          width: 92px;
          height: 20px;
          line-height: 20px;
          margin-bottom: 10px;
          font-size: 12px;
          background: #D7B374;
          color: #fff;
        }
      }
    }
  }
</style>
