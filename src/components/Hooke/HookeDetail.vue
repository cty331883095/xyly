<template>
<div class="detail-box">
  <div class="detail-wall">
    <div class="detail-title">滴管瓶模拟</div>
    <ul class="item-ul">
      <li class="item-li" :class="{'active':item.id===num}" v-for="item in arr" :key="item.id" @click="clickHandler(item.id)">{{item.name}}</li>
    </ul>
  </div>
  <div class="detail-content">
    <div class="detail-box-left">
      <div class="warp-box-one" v-show="num===1">
        <div class="img-box">
          <img :src="'./../../../../static/img/ex110.jpg'" alt="">
        </div>

      </div>
      <div v-show="num===2">评论</div>
    </div>
    <div class="detail-box-right">
      <div class="load-box">
        <div class="content-txt">
          <span class="txt1-box">浩克网所有作品均是用户自行上传分享并拥有版权或使用权,仅供网游学习交流，未经上传用户书面授权，请勿作他用。</span>
          <span class="txt2-box">下载7</span>
        </div>
          <div class="button-box">
              <button type="button" class="button-style">下载</button>
          </div>
      </div>
      <div class="author-box">

      </div>
      <div class="info-box">

      </div>

    </div>

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
  .detail-content {
    margin-top: 10px;
    padding: 0 200px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    .detail-box-left {
      width: 1000px;
      margin-bottom: 30px;
      // height: 1000px;
      border: 1px solid #ebebeb;
      background: #f4f4f4;
      .warp-box-one{
        width: 100%;
        // height: 200px;
        padding: 10px 10px 0 10px;
        // overflow: hidden;
      }
    }
    .detail-box-right {
      width: 400px;
      // height: 1000px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      .load-box {
        width: 100%;
        height: 250px;
        border: 1px solid #ebebeb;
        background: #f4f4f4;
        padding: 10px 20px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        .content-txt {
          display: flex;
          flex-direction: row;
          .txt1-box {
            width: 250px;
            height: 200px;
            font-size: 14px;
          }
          .txt2-box {
            font-size: 25px;
            margin-left: 10px;
          }
        }
        .button-box{
          .button-style{
            width: 220px;
            height: 50px;
            background: #ACCE22;
            border-radius: 5px;
            color: #fff;
            font-size: 25px;
          }
        }
      }
      .author-box {
        width: 100%;
        height: 100px;
        border: 1px solid #ebebeb;
        background: #f4f4f4;
        margin-top: 20px;
      }
      .info-box {
        width: 100%;
        height: 290px;
        border: 1px solid #ebebeb;
        background: #f4f4f4;
        margin-top: 20px;
      }
    }
  }
}
</style>
