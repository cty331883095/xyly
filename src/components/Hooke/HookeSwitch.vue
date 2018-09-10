<template>
  <ul class="item-ul">
    <li class="item-li" v-for="item in switchTitle" :key="item.id" :class="{'active':num===item.id}" @click=clickHandler(item.id,item.type)>{{item.name}}</li>
  </ul>
</template>
<script>
export default {
  name: 'HookeSwitch',
  data () {
    return {
      switchTitle: [
        { id: 1, name: '主页', type: 'home' },
        { id: 2, name: '插件', type: 'plug' },
        { id: 3, name: '动作', type: 'action' },
        { id: 4, name: '样式', type: 'style' }
      ],
      num: 1
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
    clickHandler (num, type) {
      this.num = num
      this.$router.push('/' + type)
    }
  },
  components: {
  }
}
</script>
<style lang="less" scoped>
.item-ul {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  .item-li {
    padding: 10px;
    position: relative;
    font-size: 25px;
    color: rgba(255, 255, 255, 0.7);
    &.active::after {
      content: '';
      width: 0;
      height: 0;
      width: 0;
      height: 0;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-bottom: 10px solid #fff;
      position: absolute;
      top: 48px;
      left: 35%;
    }
  }
}
</style>
