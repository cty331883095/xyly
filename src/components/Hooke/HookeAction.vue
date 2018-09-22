<template>
<div class="action-box">
  {{title}}
</div>

</template>
<script>
export default {
  name: 'HookeAction',
  data () {
    return {
      title: 'HookeAction'
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
.action-box{
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

</style>
