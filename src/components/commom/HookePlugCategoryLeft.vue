<template>
<div class="box">
 <el-collapse v-model="activeNames">
  <el-collapse-item name="1">
     <template slot="title" >
       <div class="title">类别</div>
    </template>
    <div class="item" v-for="item in msgarr" :key="item.id" @click="ClickHandler({index:item.id,type:item.type})"> <span>{{item.name}}</span> <span>{{item.value.toLocaleString()}}</span></div>
  </el-collapse-item>
</el-collapse>

</div>
</template>
<script>
export default {
  name: 'HookePlugCategoryTop',
  data () {
    return {
      activeNames: ['1'],
      msgarr: [
        { id: 1, name: '动作', value: 11358, type: 'action' },
        { id: 2, name: '插件', value: 2358, type: 'plug' },
        { id: 3, name: '样式', value: 58, type: 'style' }
      ]
    }
  },
  props: ['params'],
  computed: {},
  mounted () {},
  methods: {
    ClickHandler (obj) {
      console.log(obj)
    }
  },
  components: {}
}
</script>
<style lang="less" scoped>
.box {
  margin-top: 30px;
  margin-right: 30px;
  font-size: 25px;
  .el-collapse {
    border-top: 0 solid #ebeef5;
    border-bottom: 0 solid #ebeef5;
    .el-collapse-item {
      .el-collapse-item__header {
        font-size: 25px;
      }
    }
  }
}
.item {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  color: #332c2b;
}
.title {
  font-size: 20px;
  margin: 10px 0;
  color: #332c2b;
}
</style>
