<template>
<div class="style-box">
  <hooke-plug-search></hooke-plug-search>
  <hooke-plug-category></hooke-plug-category>
</div>

</template>
<script>
import HookePlugSearch from '@/components/commom/HookePlugSearch.vue'
import HookePlugCategory from '@/components/commom/HookePlugCategory.vue'
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
  methods: {

  },
  components: {
    HookePlugSearch,
    HookePlugCategory

  }
}
</script>
<style lang="less" scoped>
.style-box{
   display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  color: #000;
  padding: 0 86px;
}

</style>
