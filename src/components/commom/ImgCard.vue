<template>
  <div class="box-wrap">
    <img :src="params"
         class="img-style"
         @click=clickHandler(118)>
    <div class="bottom-box">
      <div class="like"
           :class="{active:templike}"
           @click="likeHandler"></div>
      <div class="collect"
           :class="{active:tempcollect}"
           @click="collectHandler"></div>
      <div class="download"
           @click="downloadHandler"></div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  name: 'ImgCard',
  data () {
    return {
      title: 'templet',
      templike: false,
      tempcollect: false
    }
  },
  props: ['params'],
  computed: {},
  mounted () { },
  methods: {
    ...mapMutations(['setNun']),
    clickHandler (params) {
      this.setNun(5)
      this.$router.push('/hookedetail/' + params)
    },
    likeHandler () {
      console.log('like')
      this.templike = !this.templike
    },
    collectHandler () {
      console.log('collect')
      this.tempcollect = !this.tempcollect
    },
    downloadHandler () {
      console.log('download')
    }
  },
  components: {}
}
</script>
<style lang="less" scoped>
.box-wrap {
  width: 100px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  .img-style {
    width: 100px;
    height: 100px;
    cursor: pointer;
  }
  .bottom-box {
    width: 100%;
    height: 22px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    background: #fefefe;
    margin: 10px 0;
    .styel {
      width: 16px;
      height: 16px;
      background-repeat: no-repeat;
      background-size: 100% 100%;
      cursor: pointer;
    }
    .like {
      .styel;
      background-image: url("~@/assets/img/likesamll-n.png");
      &.active {
        background-image: url("~@/assets/img/likesmall-h.png");
      }
    }
    .collect {
      .styel;
      background-image: url("~@/assets/img/Colect-n.png");
      &.active {
        background-image: url("~@/assets/img/Colect-h.png");
      }
    }
    .download {
      .styel;
      background-image: url("~@/assets/img/dwon.png");
    }
  }
}
</style>
