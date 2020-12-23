<template>
  <div>
    <basic id="home"/>
    <!-- <carousel /> -->
    <section1 id="section1"/>
    <section2 id="section2"/>
    <section3 id="section3"/>
    <section4 id="section4"/>
  </div>
</template>

<script>
import Basic from '~/components/hero/Basic.vue'
import Carousel from '~/components/hero/Carousel.vue'
import Section1 from '~/components/section1.vue'
import Section2 from '~/components/section2.vue'
import Section3 from '~/components/section3.vue'
import Section4 from '~/components/section4.vue'

export default {
  components: {
    Basic,
    Carousel,
    Section1,
    Section2,
    Section3,
    Section4
  }
}
</script>
