<template>
  <div class="user-space-box">
    {{title}}
  </div>

</template>
<script>
export default {
  name: 'UserSpace',
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

  }

}
</script>
<style lang="less" scoped>
.user-space-box {
  color: #000;
}
</style>
