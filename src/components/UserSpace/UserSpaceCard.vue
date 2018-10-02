<template>
  <div class="wrap">
    <div class="img-box">
      <img :src="params.imgsrc"  class="img-style">
      <div class="content-txt-box">
        <span class="txt1">{{params.title1}}</span>
        <span class="txt2">{{params.title2}}</span>
      </div>
    </div>
    <div class="introduce-box">
      <span>{{params.txt1}}</span>
      <span>{{params.txt2}}</span>
    </div>
    <div class="downtxt-box">
      <slot></slot>
    </div>
  </div>

</template>
<script>
export default {
  name: 'UserSpaceCard',
  data () {
    return {
    }
  },
  props: {
    params: {
      type: Object,
      default () {
        return {}
      }
    }
  },
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
  height: 180px;
  border-top: 1px solid #eaeaea;
  border-left: 1px solid #eaeaea;
  border-right: 1px solid #eaeaea;
  background: #f4f4f4;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  .img-box {
    width: 500px;
    height: 100px;
    display: flex;
    flex-direction: row;
    .img-style {
      width: 100px;
      height: 100px;
    }
    .content-txt-box {
      display: flex;
      flex-direction: column;
      margin-left: 20px;
      .txt1 {
        font-size: 25xp;
        color: #332c2b;
      }
      .txt2 {
        font-size: 16px;
        color: #19418c;
      }
    }
  }
  .introduce-box {
    font-size: 16px;
    color: #8b8b8c;
    width: 350px;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .downtxt-box {
    width: 120px;
    height: 150px;
    font-size: 25px;
    color: #332c2b;
  }
}
</style>
