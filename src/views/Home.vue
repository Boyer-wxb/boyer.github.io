<template>
  <div id="v">
    <div class='cover' @click="play" v-show="!show">
      <img src="@/assets/img/1.jpg" alt="" class="video">
    </div>
    <iframe src="//player.bilibili.com/player.html?aid=55130548&bvid=BV1q4411N7fV&cid=96400995&page=1" v-show="show"
      scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" class="frame"></iframe>
  </div>
</template>

<script>
  import moment from 'moment'
  export default {
    name:'Home',
    data(){
      return {
        show: false,
      }
    },
    created(){
      console.log('I love Cyberpunk 2077!')
    },
    methods:{
      play(){
        this.show = true
      }
    }
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
  .cover{
    width: 100%;
    height: inherit;
    align-items: center;
    display: flex;
    cursor: pointer;
    .video{
      width: 100%;
    }
  }
  .frame{
    width: 100%;
    height: inherit;
  }
}
</style>