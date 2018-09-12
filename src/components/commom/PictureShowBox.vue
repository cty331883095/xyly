<template>
  <div class="Pictures-box">
    <img class="img-item" :src="item.src" v-for="item in imgsdata" :key="item.id">
  </div>
</template>
<script>
export default {
  name: 'PictureShowBox',
  data () {
    return {
      title: 'templet',
      imgsdata: [
        { id: 1, src: '' },
        { id: 2, src: '' },
        { id: 3, src: '' },
        { id: 4, src: '' },
        { id: 5, src: '' },
        { id: 6, src: '' },
        { id: 7, src: '' },
        { id: 8, src: '' },
        { id: 9, src: '' }
      ]
    }
  },
  props: ['num'],
  computed: {},
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
