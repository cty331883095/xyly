<template>
  <div>
    <user-space-card v-for="item in arr"
                     :key="item.id"
                     :params="item.params"></user-space-card>
  </div>

</template>
<script>
import UserSpaceCard from '@/components/UserSpace/UserSpaceCard.vue'
export default {
  name: 'UserSpaceDwon',
  data () {
    return {
      title: 'UserSpaceDwon',
      arr: [
        {
          id: 1,
          name: 'str',
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
          params: {
            imgsrc: '../../../static/img/ex.png',
            title1: '达盖尔印版照片-photoshop动作',
            title2: 'Satum63',
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

  },
  components: {
    UserSpaceCard
  }

}
</script>
<style lang="less" scoped>
</style>
