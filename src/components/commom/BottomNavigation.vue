<template>
  <div class="bottom-box">
    <div class="abort-us-box">
      <img src="~@/assets/img/logo.png"
           class="img-box">
      <div class="tab-box">
        <ul class="item-ul">
          <router-link tag="li"
                       :to="item.type"
                       class="item-li"
                       v-for="item in title"
                       :key="item.id">
            {{item.name}}
          </router-link>
        </ul>
      </div>

    </div>
    <div class="txt-box">
      <span class="txt">
        Copyright @ 2018—2019 HOOKEBOX ALL Rights Reserved. 粤ICP备16089999
      </span>
    </div>

  </div>
</template>
<script>
export default {
  name: 'BottomNavigation',
  data () {
    return {
      title: [
        { id: 1, name: '关于我们', type: '/about' },
        { id: 2, name: '网站协议', type: '/protocol' },
        { id: 3, name: '法律声明', type: '/legal' }
      ]
    }
  },
  props: ['params'],
  computed: {},
  mounted () { },
  methods: {},
  components: {}
}
</script>
<style lang="less" scoped>
.bottom-box {
  width: 100%;
  .abort-us-box {
    width: 100%;
    height: 180px;
    background: #303030;
    border-bottom: #585858 solid 1px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    .img-box {
      margin-left: 100px;
      margin-right: 100px;
    }
    .tab-box {
      .item-ul {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: center;
        width: 600px;
        .item-li {
          padding: 10px 50px;
          color: #fefefe;
          font-size: 16px;
          cursor: pointer;
        }
      }
    }
  }
  .txt-box {
    width: 100%;
    height: 80px;
    background: #1b1b1b;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    .txt {
      margin-left: 100px;
      font-size: 14px;
      color: #585858;
    }
  }
}
</style>
