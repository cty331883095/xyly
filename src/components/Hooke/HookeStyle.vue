<template>
<div class="style-box">
  {{title}}
</div>

</template>
<script>
export default {
  name: 'HookeStyle',
  data () {
    return {
      title: 'HookeStyle'
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
.style-box{
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

</style>
