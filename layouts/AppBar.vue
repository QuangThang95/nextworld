<template>
  <div>
    <v-app-bar
      :absolute="absolute"
      flat
      :app="app"
      :style="bgColor"
    >
      <v-container style="height:80px;">
        <v-row no-gutters align="center" justify="space-between">
          <v-col md="auto">
            <v-img
              v-if="show"
              contain
              class="logo"
              alt="3D Mention Logo"
              src="/logo_white.png"
              position="left"
              max-height="80"
            />
            <v-img
              v-else
              contain
              class="logo"
              alt="3D Mention Logo"
              src="/logo_color.png"
              position="left"
              max-height="80"
            />
          </v-col>
          <v-col md="auto" class="hidden-sm-and-down">
            <v-tabs
              :background-color="color"
              :dark="dark"
              >
              <v-tab to="#home">Home</v-tab>
              <v-tab to="#section1">Menu 1</v-tab>
              <v-tab to="#section2">Menu 2</v-tab>
              <v-tab to="#section3">Menu 3</v-tab>
              <v-tab to="#section4">Menu 4</v-tab>
            </v-tabs>
          </v-col>
          <v-col md="auto" class="hidden-md-and-up" style="text-align:right;">
            <v-app-bar-nav-icon
              style=""
              :style="navColor"
              @click="drawer = !drawer"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      right
      fixed
      temporary
      overlay-color="primary"
    >
      <v-list color="white" shaped v-for="item in items" :key="item.title">
        <v-list-item :to="item.to" color="primary">
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      show: true,
      absolute: true,
      app: false,
      clipped: false,
      color: 'transparent',
      nav_color: 'white',
      dark: true,
      items: [
        { title: 'Home', icon: 'mdi-view-dashboard', to : '#home' },
        { title: 'Section 1', icon: 'mdi-view-dashboard', to : '#section1' },
        { title: 'Section 2', icon: 'mdi-view-dashboard', to : '#section2' },
        { title: 'Section 3', icon: 'mdi-view-dashboard', to : '#section3' }
      ],
    }
  },
  computed: {
    bgColor () {
      return 'height:80px;background-color:' + this.color
    },
    navColor () {
      return 'color:' + this.nav_color
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
      if(window.scrollY > 120) {
        this.dark = false
        this.show = false
        this.color = 'white'
        this.nav_color = 'black'
        this.app = true
        this.absolute = false
      } else {
        this.dark = true
        this.show = true
        this.color = 'transparent'
        this.nav_color = 'white'
        this.app = false
        this.absolute = true
      }
    }
  },
}
</script>

<style lang="scss" scoped>
  .logo {
    cursor: pointer;
  }
  .v-slide-group__content {
    transition: none;
  }
</style>