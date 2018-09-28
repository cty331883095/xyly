<template>
  <div class="Pictures-box">
    <img class="img-item" :src="'../../../static/rect/'+item.src+'.JPG'" v-for="item in imgsdata" :key="item.id" @click=clickHandler(110)>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  name: 'PictureShowBox',
  data () {
    return {

    }
  },
  props: {
    imgsdata: {
      type: Array,
      default () {
        return []
      }
    }
  },
  computed: {

  },
  mounted () {},
  methods: {
    ...mapMutations(['setNun']),
    clickHandler (params) {
      this.setNun(5)
      this.$router.push('/hookedetail/' + params)
    }
  },
  components: {}
}
</script>
<style lang="less" scoped>
.Pictures-box {
  margin-top: 20px;
  margin-bottom: 40px;
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  .img-item {
    width: 313px;
    height: 200px;
    margin: 10px 0;
    cursor: pointer;
  }
}
</style>
