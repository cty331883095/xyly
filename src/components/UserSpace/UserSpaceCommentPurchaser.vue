<template>
  <div class="wrap">
    <div class="wrap-box">
      <div class="content-img">
        <img src="@/assets/img/box-50x50.png"
             class="img-style">
        <span class="month-txt">Sper6</span>
        <span class="belongto-txt">下载者</span>
      </div>
      <div class="icon-box">
        <span>大约3天前</span>
        <span v-if="isshow"
              class="txt1">删除</span>
        <span v-if="isshow"
              class="txt2">回复</span>

      </div>
    </div>
    <div class="content-box">
      <span>它不起作用，我买了地图册并尝试再cs6中安装它，没有任何反应</span>
      <span class="txt2"
            v-if="iscommit">点击查看原评论</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'UserSpaceCommentPurchaser',
  data () {
    return {
      title: 'UserSpaceCommentPurchaser'
    }
  },
  // props: ['params', 'isshow'],
  props: {
    params: {
      type: Object,
      default () {
        return {}
      }
    },
    isshow: {
      type: Boolean,
      default () {
        return true
      }
    },
    iscommit: {
      type: Boolean,
      default () {
        return true
      }
    }
  },
  computed: {

  },
  mounted () {

  },
  watch () {

  },
  methods: {

  },
  components: {

  }

}
</script>
<style lang="less" scoped>
.wrap {
  width: 100%;
  height: 140px;
  background: #f4f4f4;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px 20px;
  border: 1px solid #f0f0f0;
  .wrap-box {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .content-img {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      .img-style {
        width: 50px;
        height: 50px;
      }
      .month-txt {
        color: #1a3979;
        font-size: 20px;
        padding: 0 20px;
      }
      .belongto-txt {
        font-size: 14px;
        padding: 3px 10px;
        background: #322d2a;
        border-radius: 3px;
        color: #f4f4f4;
      }
    }
    .icon-box {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      color: #8f8f8f;
      font-size: 18px;
      .el-icon-delete {
        padding: 0 10px;
      }
      .txt1 {
        padding: 0 3px 0 15px;
        color: #3a517d;
        cursor: pointer;
      }
      .txt2 {
        padding: 0 3px 0 3px;
        color: #3a517d;
        cursor: pointer;
      }
    }
  }
  .content-box {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .txt2 {
      font-size: 16px;
      color: #3a517d;
    }
  }
}
</style>
