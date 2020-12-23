<template>
  <div>
    <v-carousel
      :height="height"
      hide-delimiter-background
    >
      <!-- <v-carousel-item
        v-for="(slide, i) in slides"
        :key="i"
      >
        <v-sheet
          height="100%"
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <div class="display-3">
              Your screen : {{height}}
            </div>
          </v-row>
        </v-sheet>
      </v-carousel-item> -->
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
      >
        <v-sheet
          height="100%"
          tile
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <div class="display-3">
              Slide {{ i + 1 }}
            </div>
          </v-row>
        </v-sheet>
        <!-- <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="display-3">
            Picture {{ i + 1}}
          </div>
        </v-row> -->
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        height: 0,
        colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],
        items: [
          {
            src: '/hero/3.jpg',
          },
          {
            src: '/hero/2.jpg',
          },
          {
            src: '/hero/1.jpg',
          }
        ],
      }
    },
    mounted() {
      this.height = this.$store.state.height
    }
  }
</script>

