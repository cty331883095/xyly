<template>
  <div class="container">
    <Nav>
    </Nav>
    <div class="content-box">
      <router-view/>
    </div>
  </div>
</template>
<script>
import Nav from '@/components/Nav'
export default {
  name: 'Hooke',
  data () {
    return {

    }
  },
  mounted () {

  },
  methods: {
    jumphandle: function () {
      this.$router.push('/home')
    }
  },
  components: {
    Nav
    // HookeStyle,
    // HookeHome,
    // HookeAction,
    // HookePlug
  }
}
</script>
<style lang="less" scoped>
.container {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  .content-box {
    display: flex;
    flex:1;
  }
}
</style>
