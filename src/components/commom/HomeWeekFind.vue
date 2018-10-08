<template>
  <div class="wrap">
    <div class="imgs-box">
      <span class="title">发现本周精选</span>
      <span class="commit">我们的精选系列包括最佳插件，动作，特效。所有的这些都是由我们的质量团队精心挑选。</span>
      <div class="imgs">
        <img :src="'../../../static/square/'+item.src+'.JPG'"
             v-for="item in imgsdata"
             :key="item.id"
             class="item-img"
             @click=clickHandler(111)>
      </div>
    </div>
    <!-- <div class="button-box">
      <button class="button-style" type="buttom">查看更多特色功能</button>
    </div> -->
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  name: 'HomeWeekFind',
  data () {
    return {
      title: 'templet',
      imgsdata: [
        { id: 1, src: '0_001' },
        { id: 2, src: '0_002' },
        { id: 3, src: '0_003' },
        { id: 4, src: '0_004' },
        { id: 5, src: '0_005' },
        { id: 6, src: '0_006' },
        { id: 7, src: '0_007' },
        { id: 8, src: '0_008' },
        { id: 9, src: '0_009' },
        { id: 10, src: '0_010' }
      ]
    }
  },
  props: ['params'],
  computed: {

  },
  mounted () {

  },
  methods: {
    ...mapMutations(['setNun']),
    clickHandler (params) {
      this.setNun(5)
      this.$router.push('/hookedetail/' + params)
    }
  },
  components: {

  }

}
</script>
<style lang="less" scoped>
.wrap {
  width: 100%;
  height: 350px;
  background: #f4f4f4;
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
      color: #b8b8b8;
      margin-bottom: 10px;
    }
    .imgs {
      .item-img {
        width: 80px;
        height: 80px;
        margin: 0 10px;
        cursor: pointer;
      }
    }
  }
  .button-box {
    margin-bottom: 80px;
    .button-style {
      width: 170px;
      height: 30px;
      background: #acce22;
      border-radius: 5px;
      color: #fff;
    }
  }
}
</style>
