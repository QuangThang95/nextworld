<template>
  <v-app>
    <apps />
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>


<script>
import Apps from '~/layouts/AppBar.vue'

export default {
  components: {
    Apps
  }
}
</script>

