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
              v-show="!isShow"
              @click="loginTo">登陆</span>
        <div>
          <el-dropdown @command="handleCommand"
                       v-show="isShow">
            <span class="el-dropdown-link">
              {{loginname}}
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item disabled
                                class="title-wrap">hi,{{loginname}}</el-dropdown-item>
              <el-dropdown-item divided
                                command="usemanagement">用户管理</el-dropdown-item>
              <el-dropdown-item command="loginout">登出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import { mapState, mapMutations } from 'vuex'
export default {
  name: 'Hooke',
  data () {
    return {
    }
  },
  mounted () {
    this.setUserName(sessionStorage.getItem('username'))
  },
  methods: {
    ...mapMutations([
      'setShowPopwindow',
      'setUserName',
      'setUserPassWord']),
    loginTo () {
      this.setShowPopwindow(true)
    },
    handleCommand (command) {
      if (command === 'loginout') {
        this.setUserName('')
        this.setUserPassWord('')
        sessionStorage.setItem('username', '')
        this.$message('已登出')
      } else if (command === 'usemanagement') {
        console.log('用户管理')
      }
    }
  },
  computed: {
    ...mapState(['UserName', 'UserPassWord']),
    isShow () {
      return this.loginname !== ''
    },
    loginname () {
      let name = this.UserName
      // console.log(name)
      // debugger
      // if (this.UserName === '') {
      //   name = sessionStorage.getItem('username')
      //   console.log(name)
      // }
      return name
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
.el-dropdown-link {
  cursor: pointer;
  color: #ababab;
  font-size: 20px;
}
.title-wrap {
  font-size: 18px;
  color: #000;
}
</style>
