<template>
  <v-app>
    <apps />
    <v-main>
      <nuxt />
    </v-main>
    <v-footer dark padless>
      <v-row
        justify="center"
        class="indigo lighten-1 white--text text-center"
        no-gutters
      >
        <v-card flat tile class="indigo lighten-1 white--text text-center">
          <v-card-text>
            <v-btn
              v-for="icon in icons"
              :key="icon"
              class="mx-4 white--text"
              icon
            >
              <v-icon size="24px">
                {{ icon }}
              </v-icon>
            </v-btn>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-text class="white--text">
            {{ new Date(Date.now()).toLocaleString() }} —
            <strong>Quang Thắng </strong>- Zalo - <strong>0348957552 </strong>
          </v-card-text>
        </v-card>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
import Apps from "~/layouts/AppBar.vue";

export default {
  components: {
    Apps,
  },
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
  methods: {},
};
</script>
