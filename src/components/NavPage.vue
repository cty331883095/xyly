<template>
  <div class="nav-box">
    <div class="title-box">
      <img src="~@/assets/img/logo.png"
           class="img-style1" @click="jump">
      <div class="login-style">
        <img src="~@/assets/img/loginperson.png"
             class="img-style2">
        <span class="txt"
              v-show="isShow"
              @click="loginTo">登陆</span>
        <div>
          <el-dropdown @command="handleCommand"
                       v-show="!isShow">
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
    if (sessionStorage.getItem('username') === undefined) {
      this.setUserName('')
    } else {
      this.setUserName(sessionStorage.getItem('username'))
    }
  },
  methods: {
    ...mapMutations([
      'setShowPopwindow',
      'setUserName',
      'setUserPassWord',
      'setNun']),
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
        this.setNun(6)
        this.$router.push('/userspace')
      }
    },
    jump () {
      this.setNun(1)
      this.$router.push('/')
    }
  },
  computed: {
    ...mapState(['UserName', 'UserPassWord']),
    isShow () {
      let tmp = true
      if (this.loginname === '' || this.loginname === null) {
        tmp = true
      } else {
        tmp = false
      }
      return tmp
    },
    loginname () {
      let name = this.UserName
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
      cursor: pointer;
    }
    .login-style {
      margin-right: 100px;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      .img-style2 {
        margin-right: 5px;
        width: 25px;
        height: 25px;
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
