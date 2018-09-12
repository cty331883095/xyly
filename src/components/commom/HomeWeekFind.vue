<template>
  <div class="wrap">
    <div class="imgs-box">
      <span class="title">发现本周精选</span>
      <span class="commit">我们的精选系列包括最佳插件，动作，特效。所有的这些都是由我们的质量团队精心挑选。</span>
      <div class="imgs">
        <img :src="item.src" v-for="item in imgsdata" :key="item.id" class="item-img">
      </div>
    </div>
    <div class="button-box">
      <button class="button-style" type="buttom">查看更多特色功能</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeWeekFind',
  data () {
    return {
      title: 'templet',
      imgsdata: [
        { id: 1, src: '' },
        { id: 2, src: '' },
        { id: 3, src: '' },
        { id: 4, src: '' },
        { id: 5, src: '' },
        { id: 6, src: '' },
        { id: 7, src: '' },
        { id: 8, src: '' },
        { id: 9, src: '' },
        { id: 10, src: '' }
      ]
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
  height: 350px;
  background: #F4F4F4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .imgs-box {
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    align-items: center;
    .title {
      text-align: center;
      font-size: 25px;
      color: #000;
    }
    .commit {
      text-align: center;
      font-size: 16px;
      color: #B8B8B8;
      margin-bottom: 10px;
    }
    .imgs {
      .item-img {
        width: 80px;
        height: 80px;
        margin: 0 10px;
      }
    }
  }
  .button-box {
    margin-bottom: 80px;
    .button-style {
      width: 170px;
      height: 30px;
      background: #ACCE22;
      border-radius: 5px;
      color: #fff;
    }
  }
}
</style>
