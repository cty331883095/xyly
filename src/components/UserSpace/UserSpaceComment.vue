<template>
  <div class="box">
    <user-space-comment-purchaser></user-space-comment-purchaser>
    <user-space-comment-author></user-space-comment-author>
    <user-space-comment-answer></user-space-comment-answer>
    <div class="pagination-box">
      <el-pagination background
                     layout="prev, pager, next"
                     :total="20">
      </el-pagination>
    </div>
  </div>
</template>
<script>
import UserSpaceCommentAnswer from '@/components/UserSpace/UserSpaceCommentAnswer.vue'
import UserSpaceCommentPurchaser from '@/components/UserSpace/UserSpaceCommentPurchaser.vue'
import UserSpaceCommentAuthor from '@/components/UserSpace/UserSpaceCommentAuthor.vue'
export default {
  name: 'UserSpaceComment',
  data () {
    return {
      title: 'UserSpaceComment'
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
    UserSpaceCommentPurchaser
  }

}
</script>
<style lang="less" scoped>
.box {
  margin-bottom: 20px;
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
