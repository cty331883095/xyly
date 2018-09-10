<template>
  <div class="container">
    <Nav></nav>
    <div class="content-box">
      <router-view/>
    </div>
  </div>
</template>
<script>
import Nav from '@/components/Nav'
// import HookeStyle from '@/components/Hooke/HookeStyle'
// import HookeHome from '@/components/Hooke/HookeHome'
// import HookeAction from '@/components/Hooke/HookeAction'
// import HookePlug from '@/components/Hooke/HookePlug'
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
.container{
  width: 100%;
  height: 100%;
  .content-box{
    display: flex;
    flex: 1;
  }
}
</style>
