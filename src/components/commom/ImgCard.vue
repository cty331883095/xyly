<template>
  <div class="box-wrap">
      <img :src="params"  class="img-style" @click=clickHandler(118)>
      <div class="bottom-box">
        <div class="like" @click="likeHandler"></div>
        <div class="collect" @click="collectHandler"></div>
        <div class="download" @click="downloadHandler"></div>
      </div>
    </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  name: 'ImgCard',
  data () {
    return {
      title: 'templet'
    }
  },
  props: ['params'],
  computed: {},
  mounted () {},
  methods: {
    ...mapMutations(['setNun']),
    clickHandler (params) {
      this.setNun(5)
      this.$router.push('/hookedetail/' + params)
    },
    likeHandler () {
      console.log('like')
    },
    collectHandler () {
      console.log('collect')
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
  }
  .bottom-box {
    width: 100%;
    height: 22px;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-around;
    background: #fefefe;
    margin: 10px 0;
    .styel {
      width: 21px;
      height: 21px;
      background-repeat: no-repeat;
      background-size: 100% 100%;
      cursor: pointer;
    }
    .like {
      .styel;
      background-image: url("~@/assets/img/like.png");
    }
    .collect {
      .styel;
      background-image: url("~@/assets/img/collect.png");
    }
    .download {
      .styel;
      background-image: url("~@/assets/img/download.png");
    }
  }
}
</style>
