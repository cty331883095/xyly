<template>
       <router-view/>
</template>
<script>
function setFontSize () {
  let bodyNode = document.getElementsByTagName('body')[0]
  let htmlNode = document.getElementsByTagName('html')[0]
  let fontSize = bodyNode.clientWidth / 100
  bodyNode.style = 'font-size' + fontSize + 'px'
  htmlNode.style = 'font-size' + fontSize + 'px'
}
export default {
  name: 'App',
  mounted () {
    let self = this
    window.onresize = function temp () {
      let width =
        document.documentElement.clientWidth || document.body.clientWidth
      let height =
        document.documentElement.clientHeight || document.body.lientHeight
      width = width > 1360 ? width : 1360
      self.$store.commit('setChartRation', width / 1920)
      self.$store.commit('setClientWidth', width)
      self.$store.commit('setClientHeight', height)
      setFontSize()
    }
    setFontSize()
    let width =
      document.documentElement.clientWidth || document.body.clientWidth
    width = width > 1360 ? width : 1360
    self.$store.commit('setChartRation', width / 1920)
  }
}
</script>

<style lang="less">
@font-face {
  font-family: Medium;
  src: url("~@/assets/font/SourceHanSans-Medium.otf");
}
html{
overflow-y: scroll;
overflow-x: hidden;
}
html,
body {
  margin: 0;
  padding: 0;
  font-family: Medium;

}
body {
  position: relative;
  overflow: hidden;
  font-size: 20px;
  color: #fff;
}
* {
  border: none;
  padding: 0;
  margin: 0;
  outline: none;
  list-style: none;
  box-sizing: border-box;
  user-select: none;
}
.el-collapse-item__header,.el-collapse-item__wrap{
  border-bottom: 0 solid #ebeef5;
}
</style>
