<template>
  <div :style="bgColor">
    <v-sheet :height="height" color="green">
      <v-row
        class="fill-height"
        align="center"
        justify="center"
      >
        <div class="display-3">
          HOME
        </div>
      </v-row>
    </v-sheet>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        height: 0,
      }
    },
    computed: {
      bgColor () {
        return 'height:' + this.$store.state.height + 'px;background-color:green;'
      }
    },
    mounted() {
      this.height = this.$store.state.height
    }
  }
</script>

