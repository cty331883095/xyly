<template>
<div class="action-box">
  <hooke-plug-search></hooke-plug-search>
  <hooke-plug-category></hooke-plug-category>
  <!-- <bottom-navigation></bottom-navigation> -->
</div>

</template>
<script>
import HookePlugSearch from '@/components/commom/HookePlugSearch.vue'
import HookePlugCategory from '@/components/commom/HookePlugCategory.vue'
// import BottomNavigation from '@/components/commom/BottomNavigation.vue'
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
  methods: {

  },
  components: {
    HookePlugSearch,
    HookePlugCategory
    // BottomNavigation

  }

}
</script>
<style lang="less" scoped>
.action-box{
   display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  color: #000;
  padding: 0 86px;
}

</style>
