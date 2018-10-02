<template>
  <div class="user-space-box">
    <div class="top-box">
      <div class="user-img-box">
        <div class="user-content-box">
          <img src="@/assets/img/box-98x98.png" class="img-style">
          <span class="txt">点击文字编辑图像</span>
        </div>
        <div class="content-box">
          <div class="content-in">
            <span class="txt1">{{loginname}}</span> <i class="el-icon-edit"></i>
          </div>
          <span class="txt2">中国，成员自2018年8月</span>
        </div>
      </div>
      <ul class="item-ul">
        <li class="item-li"
            v-for="(item,index) in arr"
            :key="index"
            :class="{active:num ===item.id}"
            @click="clickHandler(item.id,item.type)">
          <span class="item-name">{{item.name}}</span>
          <span class="item-value">{{item.value}}</span></li>
      </ul>
    </div>
    <div class="bottom-box">
      <keep-alive>
        <component :is="componentId"></component>
      </keep-alive>
    </div>
  </div>

</template>
<script>
import UserSpaceDwon from '@/components/UserSpace/UserSpaceDwon'
import UserSpaceCollection from '@/components/UserSpace/UserSpaceCollection'
import UserSpaceComment from '@/components/UserSpace/UserSpaceComment'
import { mapState } from 'vuex'
export default {
  name: 'UserSpace',
  data () {
    return {
      arr: [
        { id: 1, name: '下载', type: 'UserSpaceDwon', value: 2 },
        { id: 2, name: '收藏', type: 'UserSpaceCollection', value: 3 },
        { id: 3, name: '评论', type: 'UserSpaceComment', value: 1 }
      ],
      num: 1,
      componentId: 'UserSpaceDwon'
    }
  },
  props: ['params'],
  computed: {
    ...mapState(['UserName', 'UserPassWord']),
    loginname () {
      let name = this.UserName
      return name
    }

  },
  mounted () {

  },
  watch () {

  },
  methods: {
    clickHandler (num, type) {
      this.num = num
      this.componentId = type
    }

  },
  components: {
    UserSpaceComment,
    UserSpaceCollection,
    UserSpaceDwon
  }

}
</script>
<style lang="less" scoped>
.user-space-box {
  display: flex;
  flex-direction: column;
  width: 100%;
  color: #000;
  .top-box {
    width: 100%;
    height: 223px;
    background: #f4f4f4;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    .user-img-box {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      padding: 30px 200px;
      .user-content-box {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;

        .img-style {
          width: 98px;
          height: 98px;
        }
        .txt {
          font-size: 14px;
          cursor: pointer;
          margin-top: 5px;
          color: #8b8b8c;
        }
      }

      .content-box {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        padding-left: 30px;
        .content-in {
          .el-icon-edit {
            cursor: pointer;
            margin-left: 5px;
          }
          .txt1 {
            font-size: 25px;
            color: #332c2b;
          }
        }
        .txt2 {
          font-size: 16px;
          color: #8b8b8c;
          border-radius: 5px;
        }
      }
    }
    .item-ul {
      padding: 0 200px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      .item-li {
        cursor: pointer;
        padding: 0 10px;
        &.active {
          background: #fefefe;
        }
        .item-name {
          color: #000;
        }
        .item-value {
          background: #5f5d5e;
          color: #fff;
        }
      }
    }
  }
  .bottom-box {
    width: 80%;
    min-height: 800px;
    margin: 10px 200px 0 200px;
  }
}
</style>
