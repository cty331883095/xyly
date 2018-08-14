<template>
<div class="home">
  <el-tabs v-model="currentTabComponet" type="card" @tab-click="handleClick">
    <el-tab-pane :key="item.id" v-for="item in msg" :label="item.name" name="item.name">
      <component :is="currentTabComponet"></component>
    </el-tab-pane>
  </el-tabs>

</div>

</template>
<script>
import HomeTab from '@/components/Home/HomeTab.vue'
import HomeBottom from '@/components/Home/HomeBottom.vue'
import HomeLeft from '@/components/Home/HomeLeft.vue'
import HomeRight from '@/components/Home/HomeRight.vue'
export default {
  name: 'home',
  data () {
    return {
      msg: [
        { id: 1, name: 'HomeTab', message: 'resheng' },
        { id: 2, name: 'HomeBottom' },
        { id: 3, name: 'HomeLeft' },
        { id: 4, name: 'HomeRight' }
      ],
      currentTabComponet: 'HomeTab',
      object: { name: 'liming', age: 25, sex: '男' }
    }
  },
  mounted () {},
  components: {
    HomeTab,
    HomeRight,
    HomeBottom,
    HomeLeft
  }
}
</script>
<style lang="less" scoped>
.home {
  width: 100%;
  height: 100%;
}
.cradcolor {
  color: red;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
