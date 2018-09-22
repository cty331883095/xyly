<template>
<div class="plug-box">
  {{title}}
</div>

</template>
<script>
export default {
  name: 'HookePlug',
  data () {
    return {
      title: 'HookePlug'
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

  }

}
</script>
<style lang="less" scoped>
.plug-box{
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  color: #000;
}

</style>
