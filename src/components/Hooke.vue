<template>
  <div class="container-box">
    <div class="container">
      <nav-page></nav-page>
      <div class="content-box">
        <router-view />
      </div>
      <div class="foot-nav">
        <bottom-navigation></bottom-navigation>
      </div>
    </div>
    <hooke-login></hooke-login>
  </div>
</template>
<script>
import NavPage from '@/components/NavPage'
import HookeLogin from '@/components/commom/HookeLogin'
import BottomNavigation from '@/components/commom/BottomNavigation.vue'
export default {
  name: 'Hooke',
  data () {
    return {}
  },
  mounted () {
    this.$router.push('/')
  },
  methods: {},
  components: {
    NavPage,
    HookeLogin,
    BottomNavigation
  }
}
</script>
<style lang="less" scoped>
.container-box {
  position: relative;
  .container {
    .content-box {
      .foot-nav {
        width: 100%;
      }
    }
  }
}
</style>
