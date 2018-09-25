<template>
  <div class="switch-box">
    <ul class="item-ul">
      <li class="item-li"
          v-show="!(5===item.id)"
          v-for="item in switchTitle"
          :key="item.id"
          :class="{'yellow':1===item.id,'active':num===item.id}"
          @click=clickHandler(item.id,item.type)>
        {{item.name}}
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'HookeSwitch',
  data () {
    return {
      switchTitle: [
        { id: 1, name: '主页', type: 'home' },
        { id: 2, name: '插件', type: 'plug' },
        { id: 3, name: '动作', type: 'action' },
        { id: 4, name: '样式', type: 'style' },
        { id: 5, name: '详情', type: 'detail' }
      ]
    }
  },
  props: ['params'],
  computed: {
    ...mapState(['num'])
  },
  mounted () {
  },
  methods: {
    ...mapMutations(['setNun']),
    clickHandler (num, type) {
      this.setNun(num)
      this.$router.push('/' + type)
    }
  },
  components: {
  }
}
</script>
<style lang="less" scoped>
.switch-box {
  padding-left: 100px;
  width: 100%;
  background: #242424;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;
}

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
    cursor: pointer;
    &.active::after {
      content: "";
      width: 0;
      height: 0;
      width: 0;
      height: 0;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-bottom: 10px solid #fff;
      position: absolute;
      top: 83%;
      left: 35%;
    }
    &.yellow.active::after {
      content: "";
      width: 0;
      height: 0;
      width: 0;
      height: 0;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-bottom: 10px solid #acce22;
      position: absolute;
      top: 83%;
      left: 35%;
    }
  }
}
</style>
