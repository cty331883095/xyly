<template>
<div class="category-box">
  <div class="left-box">
    <hooke-plug-category-left></hooke-plug-category-left>
  </div>
      <hooke-plug-category-right></hooke-plug-category-right>
  </div>
</template>
<script>
import HookePlugCategoryLeft from '@/components/commom/HookePlugCategoryLeft.vue'
import HookePlugCategoryRight from '@/components/commom/HookePlugCategoryRight.vue'
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
  methods: {

  },
  components: {
    HookePlugCategoryRight,
    HookePlugCategoryLeft

  }

}
</script>
<style lang="less" scoped>
.category-box{
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  .left-box{
    width: 250px;
    height: 100%;
  }
}
</style>
