<template>
<div class="category-box">
  <div class="left-box">
    <hooke-plug-category-left></hooke-plug-category-left>
  </div>
  <div class="right-box">
    <div class="right-box-top">
      <hooke-plug-category-top></hooke-plug-category-top>
    </div>
    <div class="right-box-content"></div>
  </div>

</div>

</template>
<script>
import HookePlugCategoryLeft from '@/components/commom/HookePlugCategoryLeft.vue'
import HookePlugCategoryTop from '@/components/commom/HookePlugCategoryTop.vue'
export default {
  name: 'HookePlugCategory',
  data () {
    return {
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
    HookePlugCategoryTop,
    HookePlugCategoryLeft

  }

}
</script>
<style lang="less" scoped>
.category-box{
  width: 100%;
  height:1000px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  .left-box{
    width: 250px;
    height: 100%;
  }
  .right-box{
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    .right-box-top{
      width: 100%;
      height: 110px;

    }
    .right-box-content{
      width: 100%;
      height: 100%;
      background: lawngreen;

    }

  }

}
</style>
