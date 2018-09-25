<template>
  <div class="nav-box">
    <div class="title-box">
      <img src="~@/assets/img/logo.png"
           class="img-style1">
      <div class="login-style">
        <img src="~@/assets/img/loginperson.png"
             class="img-style2"
             alt="">
        <span class="txt"
              @click="loginTo">登陆</span>
      </div>
    </div>
  </div>
</template>
<script>

import { mapMutations } from 'vuex'
export default {
  name: 'Hooke',
  data () {
    return {}
  },
  mounted () { },
  methods: {
    ...mapMutations(['setShowPopwindow']),
    loginTo () {
      console.log('登录成功')
      this.setShowPopwindow(true)
    }
  },
  components: {
  }
}
</script>
<style lang="less" scoped>
.nav-box {
  width: 100%;
  height: 75px;
  background: #242424;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;
  .title-box {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .img-style1 {
      margin-left: 100px;
    }
    .login-style {
      margin-right: 100px;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      .img-style2 {
        margin-right: 5px;
      }
      .txt {
        font-size: 25px;
        cursor: pointer;
        color: rgba(255, 255, 255, 0.5);
      }
    }
  }
}
</style>
