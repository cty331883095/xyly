<template>
  <div class="wrap">
    <div class="img-box">
      <img-card :params="params.imgsrc"></img-card>
      <div class="content-txt-box">
        <span class="txt1"
              @click=clickHandler(118)>{{params.title1}}</span>
        <span class="txt2">{{params.title2}}</span>
      </div>
    </div>
    <div class="introduce-box">
      <span>{{params.txt1}}</span>
      <span>{{params.txt2}}</span>
    </div>
    <div class="downtxt-box">
      <span>下载{{params.value}}</span>
    </div>
  </div>

</template>
<script>
import ImgCard from '@/components/commom/ImgCard.vue'
import { mapMutations } from 'vuex'
export default {
  name: 'CategoryCardStyleOne',
  data () {
    return {
      title: 'CategoryCardStyleOne',
      paramsDATA: {
        imgsrc: '../../../static/img/ex.png',
        title1: '软水菜photoshop动作',
        title2: 'Satum62',
        txt1: '再添加Ons / photoshop / 操作 / 照片效果',
        txt2: '最低Adobe CS版本:CS5',
        value: 13
      }
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
  computed: {},
  mounted () { },
  methods: {
    ...mapMutations(['setNun']),
    clickHandler (params) {
      this.setNun(5)
      this.$router.push('/hookedetail/' + params)
    }
  },
  components: {
    ImgCard
  }
}
</script>
<style lang="less" scoped>
.wrap {
  width: 100%;
  height: 255px;
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
    height: 150px;
    display: flex;
    flex-direction: row;

    .content-txt-box {
      display: flex;
      flex-direction: column;
      margin-left: 20px;
      .txt1 {
        font-size: 25xp;
        color: #332c2b;
        cursor: pointer;
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
    height: 150px;
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
