<template>
<div>
    <hooke-switch></hooke-switch>
 <router-view/>
</div>

</template>
<script>
import HookeSwitch from '@/components/Hooke/HookeSwitch'
export default {
  name: 'home',
  data () {
    return {
      title: 'templet'
    }
  },
  props: ['params'],
  computed: {

  },
  mounted () {

  },
  watch () {

  },
  methods: {

  },
  components: {
    HookeSwitch
  }

}
</script>
<style lang="less" scoped>

</style>
