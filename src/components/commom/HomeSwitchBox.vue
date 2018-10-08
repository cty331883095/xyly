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
      <picture-show-box :imgsdata="imgsdata" v-show="num===1"></picture-show-box>
      <picture-show-box :imgsdata="imgsdata2" v-show="num===2"></picture-show-box>
      <picture-show-box :imgsdata="imgsdata3" v-show="num===3"></picture-show-box>
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
      imgsdata: [
        { id: 1, src: '0_001' },
        { id: 2, src: '0_002' },
        { id: 3, src: '0_003' },
        { id: 4, src: '0_004' },
        { id: 5, src: '0_005' },
        { id: 6, src: '0_006' },
        { id: 7, src: '0_007' },
        { id: 8, src: '0_008' },
        { id: 9, src: '0_009' }
      ],
      imgsdata2: [
        { id: 1, src: '0_002' },
        { id: 2, src: '0_001' },
        { id: 3, src: '0_003' },
        { id: 4, src: '0_004' },
        { id: 5, src: '0_005' },
        { id: 6, src: '0_006' },
        { id: 7, src: '0_007' },
        { id: 8, src: '0_008' },
        { id: 9, src: '0_009' }
      ],
      imgsdata3: [
        { id: 1, src: '0_009' },
        { id: 2, src: '0_002' },
        { id: 3, src: '0_003' },
        { id: 4, src: '0_004' },
        { id: 5, src: '0_005' },
        { id: 6, src: '0_006' },
        { id: 7, src: '0_007' },
        { id: 8, src: '0_008' },
        { id: 9, src: '0_001' }
      ],
      num: 1
    }
  },
  props: ['params'],
  computed: {},
  mounted () {},
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
