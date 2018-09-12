<template>
  <div class="wrap-box">
    <div class="wrap">
      <ul class="item-ul">
        <li :class="{
                  'item-li':true,
                 'item-li-componets':item.id ===1,
                 'item-li-action':item.id ===2,
                 'item-li-effect':item.id ===3,
                 'active':num ===item.id
                 }" v-for="item in switchTitle" :key="item.id" @click=clickHander(item.id)>
        </li>
      </ul>
      <picture-show-box :num=num></picture-show-box>
    </div>
  </div>
</template>
<script>
import PictureShowBox from '@/components/commom/PictureShowBox.vue'
export default {
  name: 'HomeSwitchBox',
  data () {
    return {
      switchTitle: [
        { id: 1, name: '插件', type: 'plug' },
        { id: 2, name: '动作', type: 'action' },
        { id: 3, name: '特效', type: 'style' }
      ],
      num: 1
    }
  },
  props: ['params'],
  computed: {},
  mounted () {},
  watch () {},
  methods: {
    clickHander (value) {
      this.num = value
    }
  },
  components: {
    PictureShowBox
  }
}
</script>
<style lang="less" scoped>
.wrap-box {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  .wrap {
    width: 980px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    .item-ul {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      .item-li {
        width: 382px;
        height: 44px;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        cursor: pointer;
      }
      .item-li-componets {
        background-image: url("~@/assets/img/componetsn.png");
        &.active {
          background-image: url("~@/assets/img/componetsh.png");
        }
      }
      .item-li-action {
        background-image: url("~@/assets/img/actionn.png");
        &.active {
          background-image: url("~@/assets/img/actionh.png");
        }
      }
      .item-li-effect {
        background-image: url("~@/assets/img/effectn.png");
        &.active {
          background-image: url("~@/assets/img/effecth.png");
        }
      }
    }
  }
}
</style>
