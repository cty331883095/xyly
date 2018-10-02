<template>
  <div>
    <user-space-comment-purchaser></user-space-comment-purchaser>
    <user-space-comment-author></user-space-comment-author>
    <user-space-comment-answer></user-space-comment-answer>
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
</style>
