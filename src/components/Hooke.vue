<template>
  <div class="container-box">
    <div class="container">
    <Nav></Nav>
      <div class="content-box">
        <router-view/>
      </div>
    </div>
   <hooke-login></hooke-login>
   </div>
</template>
<script>
import Nav from '@/components/Nav'
import HookeLogin from '@/components/commom/HookeLogin'
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
    HookeLogin
  }
}
</script>
<style lang="less" scoped>
.container-box {
  position: relative;
  width: 100%;
  height: 100%;
  .container {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    .content-box {
      display: flex;
      flex: 1;
    }
  }
}
</style>
