<template>
  <div class="wrap">
    <div class="wrap-box">
      <div class="txt1">忘记密码了吗？</div>
      <div class="txt2">输入您的电子邮箱，我们会将您的密码发送给您。</div>
      <el-input v-model="input"
                autofocus
                placeholder="电子邮箱"></el-input>

      <el-button type="success">发送</el-button>

    </div>
  </div>

</template>
<script>
export default {
  name: 'HookeForget',
  data () {
    return {
      title: 'HookeForget'
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
      color: #19418c;
      font-size: 30px;
      margin-bottom: 10px;
    }
    .txt2 {
      font-size: 16px;
      color: #19418c;
    }
    .el-input {
      color: #b6b6b7;
      margin: 40px 0;
      // font-size: 25px;
      // height: 40px;
    }
    .el-button {
      width: 100%;
      font-size: 25px;
    }
  }
}
</style>
