<template>
  <div class="container-box">
    <div class="container">
      <Nav></Nav>
      <div class="content-box">
        <router-view/>
      </div>
      <div class="foot-nav">
        <bottom-navigation></bottom-navigation>
      </div>
    </div>
    <hooke-login></hooke-login>
  </div>
</template>
<script>
import Nav from '@/components/Nav'
// import Home from '@/components/Hooke/Home'
import HookeLogin from '@/components/commom/HookeLogin'
import BottomNavigation from '@/components/commom/BottomNavigation.vue'
// import HookeSwitch from '@/components/Hooke/HookeSwitch'
export default {
  name: 'Hooke',
  data () {
    return {}
  },
  mounted () {
    // this.$router.push('/home')
  },
  methods: {},
  components: {
    Nav,
    // Home,
    HookeLogin,
    BottomNavigation
    // HookeSwitch
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
