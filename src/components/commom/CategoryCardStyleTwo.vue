<template>
<div class="wrap">
  <div class="card-box" v-for="(item,index) in params" :key="index">
    <img-card :params="item.imgsrc"></img-card>
    <span class="txt1">{{item.str}}</span>
    <span class="txt2">下载{{item.value}}</span>
  </div>

</div>

</template>
<script>
import ImgCard from '@/components/commom/ImgCard.vue'
export default {
  name: 'CategoryCardStyleTwo',
  data () {
    return {
      title: 'CategoryCardStyleTwo'
    }
  },
  props: ['params'],
  computed: {

  },
  mounted () {

  },
  methods: {

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
  .card-box{
     display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: space-around;
  font-size: 16px;
  .txt2{
    color: #BCBCBC;
  }

  }
  }

</style>
