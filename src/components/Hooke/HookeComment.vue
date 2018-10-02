<template>
  <div class="box">
    <div class="item-box">
      <user-space-comment-purchaser></user-space-comment-purchaser>
      <user-space-comment-author></user-space-comment-author>
    </div>
    <div class="item-box">
      <user-space-comment-purchaser></user-space-comment-purchaser>
      <user-space-comment-author></user-space-comment-author>
    </div>
    <div class="item-box">
      <user-space-comment-purchaser></user-space-comment-purchaser>
      <user-space-comment-author></user-space-comment-author>
      <user-space-comment-purchaser></user-space-comment-purchaser>
      <user-space-comment-answer></user-space-comment-answer>
    </div>
    <div class="pagination-box">
      <el-pagination background
                     layout="prev, pager, next"
                     :total="20">
      </el-pagination>
    </div>
    <user-space-comment-publish></user-space-comment-publish>
  </div>

</template>
<script>
import UserSpaceCommentAnswer from '@/components/UserSpace/UserSpaceCommentAnswer.vue'
import UserSpaceCommentPurchaser from '@/components/UserSpace/UserSpaceCommentPurchaser.vue'
import UserSpaceCommentAuthor from '@/components/UserSpace/UserSpaceCommentAuthor.vue'
import UserSpaceCommentPublish from '@/components/UserSpace/UserSpaceCommentPublish.vue'
export default {
  name: 'HookeComment',
  data () {
    return {
      title: 'HookeComment'
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
    UserSpaceCommentAnswer,
    UserSpaceCommentAuthor,
    UserSpaceCommentPurchaser,
    UserSpaceCommentPublish
  }

}
</script>
<style lang="less" scoped>
.box {
  .item-box {
    margin-bottom: 20px;
  }
  .pagination-box {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    margin-bottom: 100px;
  }
}
</style>
