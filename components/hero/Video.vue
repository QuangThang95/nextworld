<template>
  <v-layout :style="atas">
    <div class="video-container">
      <video autoplay muted loop>
        <source :src="require('@/static/hero/bg.mp4')" type="video/mp4">
      </video>
      <div class="overlay">
        <h1>Pangatun Farm</h1>
        <p>Jual Kambing dan Sapi ternak untuk wilayah Purworejo dan sekitarnya
        <br>Hubungi @pangatunfarm / 0812345678 (WA)</p>
      </div>
    </div>
  </v-layout>
</template>

<script>
  export default {
    data () {
      return {
        height: 0,
        css: ';position: absolute;top: 0; bottom: 0; width: 100%; overflow: hidden;'
      }
    },
    computed: {
      bgVideo () {
        return 'height:100%;position: absolute;top: 0; bottom: 0; width: 100%; overflow: hidden;'
      },
      atas () {
        return 'height:' +  this.$store.state.height + 'px;'
      }
    },
    mounted() {
      this.height = this.$store.state.height
    }
  }
</script>

<style lang="scss" scoped>
  .video-container {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }
  .video-container video {
    /* Make video to at least 100% wide and tall */
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;

    /* Center the video */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }

  .overlay {
    background-image: linear-gradient(to bottom right,#1d282e,#5f3429);
    opacity: .8;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    box-sizing: border-box;
    padding: 15% 32px;
    line-height: 1.5;
    text-align: center;
    :last-child { margin-bottom: 0; }
    h1 {font-size:70pt; font-weight: bold; color:white;}
    p {font-size: 18pt;color:white;}
    a {color: #fff;}
  }



</style>
