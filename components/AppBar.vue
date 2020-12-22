<template>
  <div>
    <v-app-bar
      :absolute="absolute"
      flat
      :app="app"
      :style="bgColor"
    >
      Vuetify Landing Page
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      absolute: true,
      app: false,
      clipped: false,
      color: 'transparent'
    }
  },
  computed: {
    bgColor () {
      return 'background-color:' + this.color
    }
  },
  created () {
    if (process.client) {
      this.$store.commit('setHeight', window.innerHeight)
      window.addEventListener('scroll', this.handleScroll)
    }
  },
  destroyed () {
    if (process.client) {
      window.removeEventListener('scroll', this.handleScroll)
    }
  },
  methods: {
    handleScroll () {
      if(window.scrollY > 40) {
        this.color = "white"
        this.app = true
        this.absolute = false
      } else {
        this.color = 'transparent'
        this.app = false
        this.absolute = true
      }
    }
  },
}
</script>
