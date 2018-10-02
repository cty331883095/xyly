<template>
  <div class="box">
    <div class="wrap">
      <div class="title">您刚刚解锁了一个新的徽章</div>
      <div class="content-box">
        <img src="@/assets/img/badge.png">
        <div class="txt1">冠军会员</div>
        <div class="txt2">感谢您成为冠军会员，真诚地让您100%参与其中</div>
      </div>
      <div class="button-box">
        <div class="content1">转到您的页面查看所有内容</div>
        <div class="content2">
          <el-button type="success"
                     @click="jump">立即跳转</el-button>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
export default {
  name: 'HookeRegisterSuccess',
  data () {
    return {
      title: 'HookeRegisterSuccess'
    }
  },
  props: ['params'],
  computed: {

  },
  mounted () {

  },
  watch () {

  },
  methods: {
    jump () {
      this.$router.push('/')
    }

  },
  components: {

  }

}
</script>
<style lang="less" scoped>
.box {
  width: 100%;
  height: 800px;
  background: #f1f1ef;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #000;
  .wrap {
    width: 834px;
    height: 570px;
    background: #fefefe;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    .title {
      font-size: 25px;
      color: #332c2b;
      padding: 10px;
      font-weight: 700;
    }
    .content-box {
      width: 100%;
      height: 360px;
      border-top: 2px solid #ebebeb;
      border-bottom: 2px solid #ebebeb;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .txt1 {
        font-size: 30px;
        color: #332c2b;
        padding: 20px;
      }
      .txt2 {
        font-size: 16px;
        color: #8b8b8c;
      }
    }
    .button-box {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 140px;
      .content1 {
        font-size: 20px;
        color: #332c2b;
        margin-bottom: 10px;
      }
      .content2 {
        font-size: 25px;
      }
    }
  }
}
</style>
