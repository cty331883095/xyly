<template>
  <div class="box">
    <user-space-card v-for="(item,index) in arr"
                     :key="index"
                     :params="item.params">
      <div class="collection-icon"
           :class="{active:item.active}"
           @click="clickHandler(index)"></div>
    </user-space-card>
    <div class="pagination-box">
      <el-pagination background
                     layout="prev, pager, next"
                     :total="20">
      </el-pagination>
    </div>
  </div>

</template>
<script>
import UserSpaceCard from '@/components/UserSpace/UserSpaceCard.vue'
export default {
  name: 'UserSpaceCollection',
  data () {
    return {
      title: 'UserSpaceCollection',
      arr: [
        {
          id: 1,
          name: 'str',
          active: true,
          params: {
            imgsrc: '../../../static/img/ex.png',
            title1: '软水菜photoshop动作',
            title2: 'Satum62',
            txt1: '再添加Ons / photoshop / 操作 / 照片效果',
            txt2: '最低Adobe CS版本:CS5',
            value: 13
          }
        },
        {
          id: 2,
          name: 'str',
          active: true,
          params: {
            imgsrc: '../../../static/img/ex.png',
            title1: '达盖尔印版照片-photoshop动作',
            title2: 'Satum63',
            txt1: '再添加Ons / photoshop / 操作 / 照片效果',
            txt2: '最低Adobe CS版本:CS5',
            value: 17
          }
        },
        {
          id: 3,
          name: 'str',
          active: true,
          params: {
            imgsrc: '../../../static/img/ex.png',
            title1: '达盖尔印版照片-photoshop动作',
            title2: 'Satum64',
            txt1: '再添加Ons / photoshop / 操作 / 照片效果',
            txt2: '最低Adobe CS版本:CS5',
            value: 17
          }
        }
      ]
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
    clickHandler (index) {
      this.arr.splice(index, 1)
    }

  },
  components: {
    UserSpaceCard

  }

}
</script>
<style lang="less" scoped>
.box {
  margin-bottom: 20px;
}
.collection-icon {
  margin: 50px 0 0 0;
  width: 24px;
  height: 20px;
  background-image: url("~@/assets/img/collectionN.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  cursor: pointer;
  &.active {
    background-image: url("~@/assets/img/collectionH.png");
  }
}
.pagination-box {
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  margin-bottom: 100px;
}
</style>
