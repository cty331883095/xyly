<template>
  <div class="wrap">
    <div class="wrap-box">
      <div class="txt1">尊敬的用户 s7796855</div>
      <div class="txt2">修改您的密码</div>
      <el-form :model="ruleForm2"
               status-icon
               :rules="rules2"
               ref="ruleForm2"
               label-width="100px"
               class="demo-ruleForm">
        <el-form-item label="密码"
                      prop="pass">
          <el-input type="password"
                    v-model="ruleForm2.pass"
                    autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码"
                      prop="checkPass">
          <el-input type="password"
                    v-model="ruleForm2.checkPass"
                    autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="success"
                     @click="submitForm('ruleForm2')"
                     class="button-style">确定</el-button>
        </el-form-item>
      </el-form>

    </div>
  </div>

</template>
<script>
export default {
  name: 'HookeChangePsw',
  data () {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm2.checkPass !== '') {
          this.$refs.ruleForm2.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm2.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      ruleForm2: {
        pass: '',
        checkPass: '',
        age: ''
      },
      rules2: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ]
      }
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

  },
  components: {

  }

}
</script>
<style lang="less" scoped>
.wrap {
  width: 100%;
  height: 800px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #f1f1ef;
  .wrap-box {
    color: #000;
    width: 550px;
    height: 350px;
    border-radius: 5px;
    background: #fefefe;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 30px;
    .txt1 {
      font-size: 16px;
      color: #c3c3c3;
    }
    .txt2 {
      font-size: 30px;
      color: #000;
      padding: 15px 0;
    }

    .demo-ruleForm {
      width: 100%;
    }
  }
}
.button-style {
  width: 100%;
  margin-top: 20px;
}
</style>
