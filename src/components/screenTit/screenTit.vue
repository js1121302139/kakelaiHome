<template>
  <div class="screenTit ">
    <div class="them" :style="`color:${titColor};`" v-text="tit"></div>
    <p v-text="subTit" :style="`color:${subColor};`"></p>
  </div>
</template>

<script>
  export default {
    name: '',
    props: {
      tit: {
        type: String,
        default: '1'
      },
      subTit: {
        type: String,
        default: '1'
      },
      titColor: {
        type: String,
        default: '#333'
      },
      subColor: {
        type: String,
        default: '#333'
      }
    },
    data () {
      return {}
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @media screen and (max-width: 750px) {
    .screenTit {
      .them {
        font-size: 15px !important;
        margin-bottom: 8px !important;
      }
      p {
        font-size: 10px !important;
      }
    }
  }

  p, div {
    line-height: 1;
  }

  .screenTit {
    width: 100%;
    text-align: center;
    .them {
      font-size: 30px;
      margin-bottom: 16px;
      text-align: center;
    }
    p {
      font-size: 20px;
    }

  }
</style>
