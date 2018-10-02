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
    <!-- <hooke-create-account></hooke-create-account> -->
  </div>
</template>
<script>
import NavPage from '@/components/NavPage'
import HookeLogin from '@/components/commom/HookeLogin'
import HookeCreateAccount from '@/components/commom/HookeCreateAccount'
import BottomNavigation from '@/components/commom/BottomNavigation.vue'
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
    NavPage,
    HookeLogin,
    BottomNavigation,
    HookeCreateAccount
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
