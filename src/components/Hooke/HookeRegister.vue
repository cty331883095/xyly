<template>
  <div class="create-account-box">
    <div class="create-account-wrap">
      <!-- <div class="close"
           @click="closeHandler">x</div> -->
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
  name: 'HookeRegister',
  data () {
    return {
      formInline: {
        account: '',
        username: '',
        email: '',
        passeord: ''
      },
      checked: false
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
      // this.setShowCreateAccount(false)
      if (this.checked) {
        this.$router.push('/hookeregistersuccess')
      }
    }
  },
  components: {

  }

}
</script>
<style lang="less" scoped>
.create-account-box {
  width: 100%;
  height: 800px;
  background: rgba(139, 139, 139, 0.9);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  .create-account-wrap {
    width: 514px;
    height: 585px;
    border-radius: 5px;
    overflow: hidden;
    background: #fff;
    z-index: 1001;
    color: #000;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
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
      width: 100%;
      height: 61px;
      background-image: url("~@/assets/img/createAccoute.png");
      background-repeat: no-repeat;
      background-size: 100% 100%;
      cursor: pointer;
    }
  }
}
</style>
