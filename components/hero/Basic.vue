<template>
  <v-layout>
    <v-img
      cover
      gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
      src="/hero/2.jpg"
      :height="bgColor">
      <v-row
        align="center"
        class="fill-height"
      >
        <v-col>
          <v-container>
            <div class="white--text font-weight-regular" :class="{'display-2': $vuetify.breakpoint. smAndDown, 'display-4': $vuetify.breakpoint. mdAndUp}">
              Pertanian Indonesia
            </div>
            <div class="white--text font-weight-regular" :class="{'display-1': $vuetify.breakpoint. smAndDown, 'display-1': $vuetify.breakpoint. mdAndUp}">
              Modern dan Berkualitas
            </div>
          </v-container>
        </v-col>
      </v-row>
    </v-img>
  </v-layout>
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
        return this.$store.state.height
      }
    },
    mounted() {
      this.height = this.$store.state.height
    }
  }
</script>

