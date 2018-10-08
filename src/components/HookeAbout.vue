<template>
  <div class="content">
    <div class="main">
      <div class="box-inner">
        <h1 class="title-detail">关于我们</h1>
        <div class="article-detail">
          <div>
            <p>HOOKEBOX（hookebox.com）成立于 2018 年，致力打造一个设计辅助工具交流的圈子，为设计师提供国内外设计辅助工具使用和应用环境等资讯内容。</p>
          </div>
          <h3>我们的宗旨</h3>
          <p>做中国一流的设计辅助工具交流平台，让设计师工作可以更为高效。</p>
          <h3>我们的价值观</h3>
          <p>众享、学习、交流和创新。与众分享一流的设计辅助工具，学习大师级设计经验技巧，相互交流设计窍门和实现设计创新。</p>
          <h3>我们的团队</h3>
          <p>由多个拥有十余年互联网企业工作阅历的设计师、前端工程师、后台工程师和产品运营组成。我们热爱设计这个职业，也深知设计师的需求，才聚集在一起，期盼创造一个属于设计师的网络世界，为国内设计师们提供设计辅助工具服务平台。</p>
        </div>
        <h3>联系我们</h3>
        <p class="teshu-p">发送邮件到387877621@qq.com邮箱</p>
        <p>或添加QQ : 387877621 客服人员进行联系</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HookeAbout',
  data () {
    return {
      title: 'HookeAbout'
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
.content {
  width: 100%;
  min-height: 800px;
  color: #332c2b;
  background-color: #f5f4f4;
  padding-bottom: 50px;
  display: flex;
  flex: 1;
  .main {
    margin: 0 auto;
    max-width: 1290px;
    min-width: 320px;
    padding: 0;
    display: flex;
    flex: 1;
    .box-inner {
      max-width: 950px;
      margin: 0 auto;
      background-color: #fff;
      padding: 40px 30px;
      margin-top: 30px;
      .title-detail {
        line-height: 48px;
        font-size: 36px;
        color: #332c2b;
        padding-bottom: 10px;
        margin-bottom: 50px;
      }

      h3 {
        line-height: 1;
        font-size: 24px;
        color: #332c2b;
        font-weight: bold;
        margin: 10px 0 16px;
        padding-left: 20px;
        position: relative;
        &::before {
          content: "";
          display: block;
          width: 6px;
          height: 100%;
          position: absolute;
          background-color: #7a99f2;
          left: 0;
          top: 0;
        }
      }

      p {
        padding-bottom: 30px;
        color: #5f5d5d;
        font-size: 16px;
      }
      .teshu-p {
        padding-bottom: 10px;
      }
    }
  }
}
</style>
