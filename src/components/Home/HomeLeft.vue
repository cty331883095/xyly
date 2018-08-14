<template>
<div class="homebox">
    {{newparams.id}}:{{newparams.name}}:{{newparams.message}}
</div>
</template>
<script>
export default {
  name: 'HomeLeft',
  data () {
    return {
      msg: 'HomeLeft',
      activeName2: 'frist'
    }
  },
  props: {parmas: Object},
  computed: {
    newparams: function () {
      return this.parmas
    }
  }
}
</script>
<style scoped>
</style>
