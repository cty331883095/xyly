<template>
<div class="detail-box">
  <div class="detail-wall">
    <div class="detail-title">滴管瓶模拟</div>
    <ul class="item-ul">
      <li class="item-li" :class="{'active':item.id===num}" v-for="item in arr" :key="item.id" @click="clickHandler(item.id)">{{item.name}}</li>
    </ul>
  </div>
  <div class="detail-content">
    <div class="detail-box-left"></div>
    <div class="detail-box-right"></div>

  </div>
</div>

</template>
<script>
export default {
  name: 'HookeDetail',
  data () {
    return {
      num: 1,
      arr: [
        { id: 1, name: '项目细节', type: '' },
        { id: 2, name: '评论', type: '' }
      ]
    }
  },
  props: ['params'],
  computed: {},
  mounted () {},
  methods: {
    clickHandler (num) {
      this.num = num
    }
  },
  components: {}
}
</script>
<style lang="less" scoped>
.detail-box {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  color: #000;
  .detail-wall {
    width: 100%;
    height: 100px;
    background: #f4f4f4;
    padding: 0 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    .detail-title {
      margin-top: 15px;
      font-size: 25px;
    }
    .item-ul {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      .item-li {
        font-size: 16px;
        color: #c1c1c1;
        cursor: pointer;
        padding: 2px 10px;
        margin-left: 10px;
        &.active {
          background: #ffffff;
          border: 1px solid #ebebeb;
          color: #000;
        }
      }
    }
  }
  .detail-content{
    margin-top: 10px;
    padding: 0 200px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .detail-box-left{
      width:1000px;
      height: 1000px;
      border:1px solid #EBEBEB;
      background: #F4F4F4;

    }
    .detail-box-right{
      width:400px;
      height: 1000px;
      border:1px solid #EBEBEB;
      background: #F4F4F4;

    }

  }

}
</style>
