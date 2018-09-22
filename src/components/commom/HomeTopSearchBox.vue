<template>
  <div class="home-top">
    <div class="content-warp">
      <span class="title">{{'3,550'}}插件，动作，效果</span>
      <span class="txt">节省你的执行时间</span>
    </div>
    <div class="search-box">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeTopSearchBox',
  data () {
    return {
      title: 'templet'
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
.home-top {
  width: 100%;
  height: 180px;
  background: #ACCE22;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  .content-warp {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .title {
      font-size: 30px;
    }
    .txt {
      font-size: 20px;
    }
  }
  .search-box {
    margin-top:20px;
    width: 570px;
  }
}
</style>
