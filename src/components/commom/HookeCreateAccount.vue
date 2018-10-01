<template>
  <div class="create-account-box"
       v-if="ShowCreateAccount">
    <div class="create-account-wrap">
      <div class="close"
           @click="closeHandler">x</div>
      <div>
        <div class="title-box">
          创建账号
        </div>
        <div class="form-box">
          <el-form :model="formInline"
                   class="demo-form-inline">
            <el-form-item>
              <el-input v-model="formInline.account"
                        placeholder="账号"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input v-model="formInline.username"
                        placeholder="用户名"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input type="email"
                        v-model="formInline.email"
                        placeholder="电子邮箱"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input type="password"
                        v-model="formInline.passeord"
                        placeholder="密码"></el-input>
            </el-form-item>
            <el-checkbox v-model="checked">我同意HOOKEBOX隐私协议</el-checkbox>
          </el-form>
        </div>
      </div>
      <div class="button-style"
           @click="createHandler">
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'HookeCreateAccount',
  data () {
    return {
      formInline: {
        account: '',
        username: '',
        email: '',
        passeord: ''
      },
      checked: true
    }
  },
  computed: {
    ...mapState(['ShowPopwindow', 'ShowCreateAccount'])

  },
  mounted () {

  },
  watch () {

  },
  methods: {
    ...mapMutations([
      'setShowPopwindow',
      'setShowCreateAccount'
    ]),
    closeHandler () {
      this.setShowCreateAccount(false)
    },
    createHandler () {
      console.log('创建账号')
      this.setShowCreateAccount(false)
    }
  },
  components: {

  }

}
</script>
<style lang="less" scoped>
.create-account-box {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(139, 139, 139, 0.9);
  top: 0;
  left: 0;
  z-index: 1000;
  .create-account-wrap {
    position: absolute;
    margin: auto;
    top: 150px;
    left: 0;
    right: 0;
    width: 514px;
    height: 585px;
    border-radius: 5px;
    overflow: hidden;
    background: #fff;
    z-index: 1001;
    color: #000;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .close {
      position: absolute;
      font-size: 25px;
      right: 11px;
      top: -4px;
      cursor: pointer;
      &:hover {
        color: #45649e;
      }
    }

    .title-box {
      font-size: 30px;
      font-weight: 600;
      padding: 20px;
      color: #332c2b;
    }
    .form-box {
      padding: 0 10px;
    }
    .button-style {
      width: 494px;
      height: 61px;
      background-image: url("~@/assets/img/createAccoute.png");
      background-repeat: no-repeat;
      background-size: 100% 100%;
      margin: 0 10px;
      cursor: pointer;
    }
  }
}
</style>
