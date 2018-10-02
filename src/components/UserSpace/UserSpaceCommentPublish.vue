<template>
  <div class="wrap">
    <div class="wrap-box">
      <div class="content-img">
        <img src="@/assets/img/box-50x50.png" class="img-style">
        <el-input v-model="input"
                  placeholder="说点什么"></el-input>
      </div>
    </div>
    <div class="content-box">
      <button class="button-style"
              type="button">发表评论</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'UserSpaceCommentAnswer',
  data () {
    return {
      title: 'UserSpaceCommentAnswer'
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
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      .el-input {
        margin-left: 10px;
      }
    }
  }
  .content-box {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    .button-style {
      width: 120px;
      height: 35px;
      background: #acce22;
      color: #fff;
      border-radius: 5px;
      font-size: 20px;
      line-height: 35px;
      text-align: center;
      cursor: pointer;
    }
  }
}
</style>
