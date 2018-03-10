<template>
  <div class="dropItem">
    <div class="itemTop" :class="{active: !isHidden}" @click="changeState">
      <img src="./img/dropitem-ico.png" alt="">
      <p class="itemTit">兑咖商户端app每个模块有什么功能?</p>
    </div>
    <div class="dropdown" :class="{hidden : isHidden}">
      功能：查看店铺众筹、购票活动情况 操作步骤：点击玩咖管理，查看众筹、购票活动状态、进度、可以创建活动，用户入场验证，其中创建活动， 图片规格：主图1张（750*380），活动图片2张（750*480）。击订单结算，查看订单详情，以及进行订单结算申请,结算同营业收入结算方式。击 查看详情，查看活动详情，包括入场人数，同时也可以分享给朋友，邀请朋友们来参加活动
    </div>
  </div>
</template>

<script>
  export default {
    name: '',
    data () {
      return {
        isHidden: true
      }
    },
    created () {
    },
    methods: {
      changeState () {
        this.isHidden = !this.isHidden
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .dropItem {
    margin-bottom: 46px;
    .itemTop {
      img {
        position: relative;
        width: 28px;
        height: 28px;
        float: left;
        transition: all 0.25s;
      }
      p {
        margin-bottom: 0;
        font-size: 20px;
      }
    }
    .active {
      img{
        transform: rotateZ(90deg);
      }
    }
    .dropdown {
      margin-top: 11px;
      padding-left: 33px;
      margin-bottom: -13px;
      font-size: 16px;
      color: #666;
    }
  }
  @media screen and (max-width: 750px) {
    .dropItem {
      border-bottom: 1px solid #d8d8d8;
      margin-bottom: -1px;
      .itemTop {
        display: flex;
        flex: 1;
        align-items: center;
        height: 43px;
        line-height: 43px;
        img {
          display: flex;
          position: relative;
          width: 18px;
          height: 18px;
          float: left;
          transition: all 0.25s;
        }
        p {
          margin-bottom: 0;
          font-size: 14px;
        }
      }
      .active {
        img{
          transform: rotateZ(90deg);
        }
      }
      .dropdown {
        margin-top: -2px;
        padding-left: 14px;
        padding-bottom: 17px;
        font-size: 12px;
        color: #666;
      }
    }
  }
</style>
