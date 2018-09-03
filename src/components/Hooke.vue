<template>
<div class="container">


</div>
</template>
<script>
import TestOne from '@/components/test/TestOne'
export default {
  name: 'Hooke',
  data () {
    return {
      title: [{id: 33, name: 'xiaoming'}, {id: 43, name: 'xiaohong'}]
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
    TestOne
  }

}
</script>
<style lang="less" scoped>
.buttonstyle{
  color: red;
  font-size: 25px;
}

</style>
