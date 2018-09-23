<template>
  <div class="home-box">
    <home-top-search-box>
      <el-input size="large" placeholder="搜索结果" v-model="inputdata">
        <i slot="suffix" class="el-input__icon el-icon-search"></i>
      </el-input>
    </home-top-search-box>
    <home-week-find></home-week-find>
    <home-switch-box></home-switch-box>
    <bottom-navigation></bottom-navigation>
  </div>
</template>
<script>
import HomeTopSearchBox from '@/components/commom/HomeTopSearchBox.vue'
import HomeWeekFind from '@/components/commom/HomeWeekFind.vue'
import HomeSwitchBox from '@/components/commom/HomeSwitchBox.vue'
import BottomNavigation from '@/components/commom/BottomNavigation.vue'
export default {
  name: 'HookeHome',
  data () {
    return {
      title: 'HookeHome',
      inputdata: ''
    }
  },
  props: ['params'],
  computed: {},
  mounted () {},
  methods: {},
  components: {
    HomeTopSearchBox,
    HomeWeekFind,
    HomeSwitchBox,
    BottomNavigation
  }
}
</script>
<style lang="less" scoped>
.home-box {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
</style>
