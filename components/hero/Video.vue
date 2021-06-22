<template>
  <v-layout :style="atas">
    <div class="video-container">
      <video autoplay muted loop>
        <source :src="require('@/static/hero/bg.mp4')" type="video/mp4" />
      </video>
      <div class="overlay">
        <h1>Kiếm Tiền Youtube</h1>
        <div>Công ty NextWorld</div>
        <p>Zalo : <strong>Quang Thắng</strong> <br />0348957552</p>
      </div>
    </div>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      height: 0,
      css:
        ";position: absolute;top: 0; bottom: 0; width: 100%; overflow: hidden;",
    };
  },
  computed: {
    bgVideo() {
      return "height:100%;position: absolute;top: 0; bottom: 0; width: 100%; overflow: hidden;";
    },
    atas() {
      return "height:" + this.$store.state.height + "px;";
    },
  },
  mounted() {
    this.height = this.$store.state.height;
  },
};
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
  transform: translate(-50%, -50%);
}

.overlay {
  background-image: linear-gradient(to bottom right, #1d282e, #5f3429);
  opacity: 0.8;
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
  color: white;
  :last-child {
    margin-bottom: 0;
  }
  h1 {
    font-size: 50pt;
    font-weight: bold;
  }
  div {
    font-size: 25pt;
    padding: 2% 0;
  }
  p {
    font-size: 18pt;
  }
  a {
    color: #fff;
  }
}
</style>
