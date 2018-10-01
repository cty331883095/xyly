<template>
  <div class="detail-box">
    <div class="detail-wall">
      <div class="detail-title">滴管瓶模拟</div>
      <ul class="item-ul">
        <li class="item-li"
            :class="{'active':item.id===num}"
            v-for="item in arr"
            :key="item.id"
            @click="clickHandler(item.id)">{{item.name}}</li>
      </ul>
    </div>
    <div class="detail-content">
      <div class="detail-box-left">
        <div class="warp-box-one"
             v-show="num===1">
          <div class="img-box">
            <img class="img-style"
                 :src="'./../../../../static/img/ex110.jpg'"
                 alt="这是一张图片">
          </div>
            <div class="icon-box">
              <div class="tolike-box"></div>
              <div class="tocollect-box"></div>
            </div>
            <div class="info-card-box">
              <span class="txt1">Photoshop动作</span>
              <div class="info-card-warp">
                <span>3D文字效果套装1</span>
                <span>16文字样式</span>
                <span>16完全分层的PSD</span>
                <span>文本适用于智能对象图层</span>
                <span>2000x1500像素dpi</span>
                <span>附加帮助文字和字体链接</span>
                <!-- <pre class="pre-style">
              3D文字效果套装1
              16文字样式
              16完全分层的PSD
              文本适用于智能对象图层
              2000x1500像素dpi
              附加帮助文字和字体链接
            </pre> -->
              </div>
              <span class="commit-txt">都是用心做的，希望你能喜欢它</span>
            </div>

          </div>
          <div v-show="num===2">评论</div>
        </div>
        <div class="detail-box-right">
          <div class="load-box">
            <div class="content-txt">
              <span class="txt1-box">浩克网所有作品均是用户自行上传分享并拥有版权或使用权,仅供网游学习交流，未经上传用户书面授权，请勿作他用。</span>
              <span class="txt2-box">下载 {{7}}</span>
            </div>
            <div class="button-box">
              <div class="button-style"
                   @click="download">
                <div class="icon-download"></div>
                下载
              </div>
            </div>
          </div>
          <div class="author-box">
            <div class="author-wrap">
              <img src="/"
                 class="img-style"
                 alt="">
              <div class="author-content">
                <span class="">作者：{{'Satum62'}}</span>
                <span class="">作者排名：{{67}}</span>
              </div>
            </div>
          </div>
          <div class="info-box">
            <ul class="info-wrap">
              <li class="info-li"
                  v-for="(item,index) in arrdata"
                  :key="index">
                <div class="item-one">{{item.title}}</div>
                <div class="item-two">{{item.content}}</div>
              </li>
            </ul>
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
      ],
      arrdata: [
        { title: '最后更新', content: '6月13日' },
        { title: '创建', content: '6月13日' },
        { title: '高分辨率', content: '是' },
        { title: '分层', content: '是' },
        { title: '包含图形文件', content: 'PSD photoshop' },
        { title: '最低Adobe CS版本', content: 'CSS' },
        { title: '像素尺寸', content: '4000x2670' },
        { title: '标签', content: '防腐，空白，瓶，护理容器，滴管，药物' }
      ]
    }
  },
  props: ['params'],
  computed: {},
  mounted () { },
  methods: {
    clickHandler (num) {
      // if (num === 2) {
      //   return
      // }
      this.num = num
    },
    download () {
      console.log('下载')
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

      .warp-box-one {
        width: 100%;
        .img-box {
          border: 1px solid #ebebeb;
          padding: 10px 10px 0 10px;
          background: #f4f4f4;
          .img-style {
            width: 100%;
          }
        }
        .icon-box {
          margin-top: 30px;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          align-items: center;
          .tolike-box {
            width: 253px;
            height: 55px;
            background-image: url("~@/assets/img/tolike.png");
            background-repeat: no-repeat;
            background-size: 100% 100%;
          }
          .tocollect-box {
            width: 253px;
            height: 55px;
            background-image: url("~@/assets/img/tocollect.png");
            background-repeat: no-repeat;
            background-size: 100% 100%;
          }
        }
        .info-card-box {
          margin-top: 30px;
          .txt1 {
            margin-left: 20px;
          }
          .info-card-warp {
            margin-top: 20px;
            margin-bottom: 10px;
            border-bottom: 1px solid #e6e6e6;
            border-top: 1px solid #e6e6e6;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            padding: 10px 0 10px 20px;
            font-size: 16px;
            color: #949091;
          }
          .commit-txt {
            margin-left: 20px;
            color: #949091;
            font-size: 20px;
          }
        }
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
        padding: 20px 30px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        .content-txt {
          display: flex;
          flex-direction: row;
          .txt1-box {
            width: 230px;
            height: 200px;
            font-size: 16px;
          }
          .txt2-box {
            font-size: 25px;
            margin-left: 20px;
          }
        }
        .button-box {
          .button-style {
            width: 220px;
            height: 50px;
            background: #acce22;
            border-radius: 5px;
            color: #fff;
            font-size: 25px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            .icon-download {
              margin-right: 20px;
              width: 33px;
              height: 33px;
              background-repeat: no-repeat;
              background-size: 100% 100%;
              background-image: url("~@/assets/img/download2.png");
            }
          }
        }
      }
      .author-box {
        width: 100%;
        height: 100px;
        border: 1px solid #ebebeb;
        background: #f4f4f4;
        margin-top: 20px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .author-wrap {
          margin: 10px 0 10px 0px;
          font-size: 20px;
          color: #032c73;
          display: flex;
          .author-content {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
          }
          .img-style {
            margin: 0 30px;
            width: 66px;
            height: 66px;
          }
        }
      }
      .info-box {
        width: 100%;
        height: 290px;
        border: 1px solid #ebebeb;
        background: #f4f4f4;
        margin-top: 20px;
        padding: 30px;
        display: flex;
        flex: 1;
        .info-wrap {
          font-size: 14px;
          width: 100%;
          height: 100%;
          .info-li {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: flex-start;
            padding: 2px 0;
            .item-one {
              width: 50%;
            }
            .item-two {
              width: 50%;
              color: #45649e;
            }
          }
        }
      }
    }
  }
}
</style>
