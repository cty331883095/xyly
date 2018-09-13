<template>
<div class="login-box" v-show="iSshow">
  <div class="login-warp">

  </div>

</div>

</template>
<script>
export default {
  name: 'HookeLogin',
  data () {
    return {
      title: 'templet',
      iSshow: false
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

  }

}
</script>
<style lang="less" scoped>
.login-box{
  position: absolute;
 width: 100%;
 height: 100%;
 background: rgba(139,139,139,0.9);
 top:0;
 left: 0;
 z-index: 1000;
 .login-warp{
     position: absolute;
     margin: auto;
     top: 0;
     bottom:0;
     left: 0;
     right: 0;
     width:840px ;
     height: 585px;
     border-radius: 5px;
     background: lawngreen;
     z-index: 1001;

 }
}

</style>
