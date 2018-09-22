<template>
  <div class="Pictures-box">
    <img class="img-item" :src="'../../../static/rect/'+item.src+'.JPG'" v-for="item in imgsdata" :key="item.id">
  </div>
</template>
<script>

export default {
  name: 'PictureShowBox',
  data () {
    return {
      title: 'templet',
      imgsdata: [
        { id: 1, src: '0_001' },
        { id: 2, src: '0_002' },
        { id: 3, src: '0_003' },
        { id: 4, src: '0_004' },
        { id: 5, src: '0_005' },
        { id: 6, src: '0_006' },
        { id: 7, src: '0_007' },
        { id: 8, src: '0_008' },
        { id: 9, src: '0_009' }
      ]
    }
  },
  props: ['num'],
  computed: {

  },
  mounted () {},
  watch () {},
  methods: {},
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
  }
}
</style>
