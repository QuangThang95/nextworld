<template>
  <div>
    <hero />
    <about />
  </div>
</template>

<script>
import Hero from '~/components/Hero.vue'
import About from '~/components/About.vue'

export default {
  components: {
    Hero,
    About
  }
}
</script>
