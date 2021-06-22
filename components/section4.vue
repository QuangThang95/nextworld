<template>
  <v-sheet height="100%">
    <v-row>
      <v-col cols="12"><h1 class="py-3">H/Ảnh Minh Hoạ Rút Tiền</h1></v-col>
      <v-col
        cols="10"
        md="4"
        offset="1"
        v-for="(i, index) in items"
        :key="index"
      >
        <v-zoomer>
          <v-img
            :src="i.image"
            aspect-ratio="2"
            contain
            class="mb-2 image"
          ></v-img>
        </v-zoomer>
        <v-divider></v-divider>
      </v-col>
      <v-col cols="12">
        <h3 class="py-3 px-5">
          Còn chờ chi nữa, Add Zalo 0348957552 hoặc ib fb
          <a target="_blank" href="https://www.facebook.com/thang12cb9">
            Quang Thắng
          </a>
        </h3></v-col
      >
    </v-row>
  </v-sheet>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { image: "/1.jpeg" },
        { image: "/2.jpeg" },
        { image: "/3.jpeg" },
        { image: "/4.jpeg" },
        { image: "/5.jpeg" },
        { image: "/6.jpeg" },
        { image: "/7.jpeg" },
        { image: "/8.jpeg" },
      ],
    };
  },
  // mounted() {
  //   this.height = this.$store.state.height
  // }
};
</script>
<style scoped></style>
