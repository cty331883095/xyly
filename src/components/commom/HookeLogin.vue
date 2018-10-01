<template>
  <div class="login-box"
       v-if="ShowPopwindow">
    <div class="login-warp">
      <div class="logo-img-box">
        <img src="@/assets/img/logo2.png"
             class="logo-img">
      </div>
        <div class="login-content-box">
          <div class="login-content">
            <div class="input-item">
              <label for="username">用户名</label>
              <input type="text"
                   class="item"
                   name="username"
                   v-model="usernametxt"
                   />
          </div>
              <div class="input-item">
                <div class="item-title">
                  <label for="password">密码</label>
                  <a class="forget">忘记密码</a>
                </div>
                <input type="password"
                   class="item"
                   name="password"
                   v-model="passwordtxt"
                   />
          </div>
                <div class="button-box">
                  <div>
                    <span class="txt1">新来的？</span>
                    <span class="txt2"
                          @click="toCreateAccountPage">创建一个HookeBox账户</span>
                  </div>
                  <button type="button"
                          class="button-style"
                          @click="outToLogin">登录到你的账号</button>
                </div>

              </div>
            </div>
          </div>
        </div>

</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'HookeLogin',
  data () {
    return {
      title: 'templet',
      iSshow: false
    }
  },
  computed: {
    ...mapState(['ShowPopwindow', 'ShowCreateAccount'])
  },
  mounted () { },
  methods: {
    ...mapMutations([
      'setShowPopwindow',
      'setShowCreateAccount',
      'setUserName',
      'setUserPassWord'

    ]),
    outToLogin () {
      this.setUserName(this.usernametxt ? this.usernametxt : '')
      this.setUserPassWord(this.passwordtxt ? this.passwordtxt : '')
      sessionStorage.setItem('username', this.usernametxt ? this.usernametxt : '')
      this.setShowPopwindow(false)
      this.setShowCreateAccount(false)
      this.usernametxt = ''
      this.passwordtxt = ''
    },
    toCreateAccountPage () {
      console.log('111')
      this.setShowPopwindow(false)
      this.setShowCreateAccount(true)
    }
  },
  components: {}
}
</script>
<style lang="less" scoped>
.login-box {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(139, 139, 139, 0.9);
  top: 0;
  left: 0;
  z-index: 1000;
  .login-warp {
    position: absolute;
    margin: auto;
    top: 150px;
    left: 0;
    right: 0;
    width: 840px;
    height: 585px;
    border-radius: 5px;
    overflow: hidden;
    z-index: 1001;
    .logo-img-box {
      width: 100%;
      height: 120px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #242424;
      .logo-img {
        width: 312px;
        height: 48px;
      }
    }
    .login-content-box {
      width: 100%;
      height: 80%;
      background: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      .login-content {
        width: 450px;
        height: 340px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        .input-item {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          color: #000;
          margin: 10px 0;
          .item-title {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            .forget {
              color: #45738d;
              cursor: pointer;
            }
          }

          .item {
            width: 450px;
            height: 50px;
            border: 1px solid #a9a9a9;
            border-radius: 5px;
            font-size: 20px;
          }
        }
        .button-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          margin-top: 30px;

          .txt1 {
            color: #000;
          }
          .txt2 {
            color: #5f8ca8;
            cursor: pointer;
            &:hover {
              color: #acce22;
            }
          }
          .button-style {
            width: 255px;
            height: 60px;
            background: #acce22;
            border-radius: 5px;
            color: #fff;
            font-size: 20px;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>
