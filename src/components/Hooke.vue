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
import HookeLogin from '@/components/commom/HookeLogin'
import BottomNavigation from '@/components/commom/BottomNavigation.vue'
export default {
  name: 'Hooke',
  data () {
    return {}
  },
  mounted () {
    this.$router.push('/home')
  },
  methods: {},
  components: {
    Nav,
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
