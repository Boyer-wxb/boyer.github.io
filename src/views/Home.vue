<template>
  <div id="v">
    <video src="@/assets/video/1.mp4" controls poster="@/assets/img/1.jpg"></video>
  </div>
</template>

<script>
  import moment from 'moment'
  export default {
    name:'Home',
    data(){
      return {
        
      }
    },
    created(){
      console.log('I love Cyberpunk 2077!')
    },
  }
</script>

<style lang="scss" scoped>
$header: 60px;
$footer: 50px;
#v{
  width: 100%;
  height: calc(100vh - #{$header} - #{$footer});
  overflow: hidden;
  background: black;
  video{
    width: 100%;
    height: inherit;
  }
}
</style>