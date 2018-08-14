<template>
<div class="homebox">
    {{newparams.id}}:{{newparams.name}}:{{newparams.message}}
</div>
</template>
<script>
export default {
  name: 'hometab',
  data () {
    return {
      msg: 'hometab',
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
