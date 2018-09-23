<template>
<div class="right-box">
   <div class="right-box-top">
     <div class="content-box">
       <!-- <img :src="item.src"  class="img-style" :class="{active:item.id===index}" v-for="item in SwitchArr" :key="item.id" @click="clickHandler(item.id)"> -->
       <div  class="img-style1" :class="{active:1===index}"  @click="clickHandler(1)"></div>
       <div   class="img-style2" :class="{active:2===index}"  @click="clickHandler(2)"></div>
     </div>

    </div>
    <div class="right-box-content">
        <div v-show="index ===1">
          <category-card-style-one v-for="item in arr" :key="item.id" :params="item.params"></category-card-style-one>
        </div>
        <div v-show="index ===2">
          <category-card-style-two v-for="item in arr2" :key="item.id" :params="item.params"></category-card-style-two>
          </div>
    </div>
</div>

</template>
<script>
import CategoryCardStyleOne from '@/components/commom/CategoryCardStyleOne.vue'
import CategoryCardStyleTwo from '@/components/commom/CategoryCardStyleTwo.vue'
export default {
  name: 'HookePlugCategoryTop',
  data () {
    return {
      SwitchArr: [
        { id: 1, src: '/', type: '条状' },
        { id: 2, src: '/', type: '网格' }
      ],
      index: 2,
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
        },
        {
          id: 3,
          name: 'str',
          params: {
            imgsrc: '../../../static/img/ex.png',
            title1: '软水菜photoshop动作',
            title2: 'Satum62',
            txt1: '再添加Ons / photoshop / 操作 / 照片效果',
            txt2: '最低Adobe CS版本:CS5',
            value: 18
          }
        },
        {
          id: 4,
          name: 'str',
          params: {
            imgsrc: '../../../static/img/ex.png',
            title1: '软水菜photoshop动作',
            title2: 'Satum62',
            txt1: '再添加Ons / photoshop / 操作 / 照片效果',
            txt2: '最低Adobe CS版本:CS5',
            value: 19
          }
        }
      ],
      arr2: [
        {
          id: 1,
          name: 'str',
          params: [
            {
              id: 1,
              str: '10种款式金色文字',
              value: 3,
              imgsrc: '../../../static/img/ex.png'
            },
            {
              id: 2,
              str: '11种款式金色文字',
              value: 30,
              imgsrc: '../../../static/img/ex.png'
            },
            {
              id: 3,
              str: '12种款式金色文字',
              value: 10,
              imgsrc: '../../../static/img/ex.png'
            },
            {
              id: 4,
              str: '13种款式金色文字',
              value: 3,
              imgsrc: '../../../static/img/ex.png'
            },
            {
              id: 5,
              str: '14种款式金色文字',
              value: 3,
              imgsrc: '../../../static/img/ex.png'
            }
          ]
        },
        {
          id: 2,
          name: 'str',
          params: [
            {
              id: 1,
              str: '10种款式金色文字',
              value: 3,
              imgsrc: '../../../static/img/ex.png'
            },
            {
              id: 2,
              str: '11种款式金色文字',
              value: 30,
              imgsrc: '../../../static/img/ex.png'
            },
            {
              id: 3,
              str: '12种款式金色文字',
              value: 10,
              imgsrc: '../../../static/img/ex.png'
            },
            {
              id: 4,
              str: '13种款式金色文字',
              value: 3,
              imgsrc: '../../../static/img/ex.png'
            },
            {
              id: 5,
              str: '14种款式金色文字',
              value: 3,
              imgsrc: '../../../static/img/ex.png'
            }
          ]
        },
        {
          id: 3,
          name: 'str',
          params: [
            {
              id: 1,
              str: '10种款式金色文字',
              value: 3,
              imgsrc: '../../../static/img/ex.png'
            },
            {
              id: 2,
              str: '11种款式金色文字',
              value: 30,
              imgsrc: '../../../static/img/ex.png'
            },
            {
              id: 3,
              str: '12种款式金色文字',
              value: 10,
              imgsrc: '../../../static/img/ex.png'
            },
            {
              id: 4,
              str: '13种款式金色文字',
              value: 3,
              imgsrc: '../../../static/img/ex.png'
            },
            {
              id: 5,
              str: '14种款式金色文字',
              value: 3,
              imgsrc: '../../../static/img/ex.png'
            }
          ]
        },
        {
          id: 4,
          name: 'str',
          params: [
            {
              id: 1,
              str: '10种款式金色文字',
              value: 3,
              imgsrc: '../../../static/img/ex.png'
            },
            {
              id: 2,
              str: '11种款式金色文字',
              value: 30,
              imgsrc: '../../../static/img/ex.png'
            },
            {
              id: 3,
              str: '12种款式金色文字',
              value: 10,
              imgsrc: '../../../static/img/ex.png'
            },
            {
              id: 4,
              str: '13种款式金色文字',
              value: 3,
              imgsrc: '../../../static/img/ex.png'
            },
            {
              id: 5,
              str: '14种款式金色文字',
              value: 3,
              imgsrc: '../../../static/img/ex.png'
            }
          ]
        }
      ]
    }
  },
  props: ['params'],
  computed: {},
  mounted () {},
  methods: {
    clickHandler (index) {
      this.index = index
    }
  },
  components: {
    CategoryCardStyleOne,
    CategoryCardStyleTwo
  }
}
</script>
<style lang="less" scoped>
.right-box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  .right-box-top {
    width: 100%;
    height: 110px;
    .content-box {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      border-bottom: 1px solid #eaeaea;
      .img-style {
        background-repeat: no-repeat;
        background-size: 100% 100%;
        margin: 0 5px;
        cursor: pointer;
      }
      .img-style1 {
        .img-style;
        width: 31px;
        height: 31px;
        background-image: url('~@/assets/img/icon-1-n.png');
        &.active {
          background-image: url('~@/assets/img/icon-1-H.png');
        }
      }
       .img-style2 {
        .img-style;
        width: 26px;
        height: 26px;
        background-image: url('~@/assets/img/icon-2-n.png');
        &.active {
          background-image: url('~@/assets/img/icon-2-h.png');
        }
      }
    }
  }
  .right-box-content {
    width: 100%;
    height: 100%;
    margin-bottom: 30px;
  }
}
</style>
