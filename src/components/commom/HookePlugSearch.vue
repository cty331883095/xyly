<template>
  <div class="search-box">
    <div class="search-wrap">
      <input type="text" v-model="valInput" placeholder="请输入搜索内容" class="item-input">
      <button type="button"
              class="item-button">搜索</button>
    </div>
    <div class="content">
      <span class="txt1">1,888个</span>
      <span class="txt2">photoshop插件</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HookePlugSearch',
  data () {
    return {
      title: 'HookePlugSearch',
      valInput: ''
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
  }
}
</script>
<style lang="less" scoped>
.search-box {
  width: 100%;
  height: 162px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #cccccc;
  .search-wrap {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    .item-input {
      width: 100%;
      height: 65px;
      border: 1px solid #e1e1e1;
      color: #acacac;
      font-size: 25px;
      padding-left: 42px;
    }
    .item-button {
      width: 198px;
      height: 66px;
      background: #689828;
      font-size: 25px;
      color: #fff;
      cursor: pointer;
    }
  }
  .content {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    font-size: 16px;
    margin-top: 8px;
    .txt2 {
      color: #acacac;
      margin-left: 20px;
    }
  }
}
</style>
