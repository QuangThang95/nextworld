import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  Section1: () => import('../../components/section1.vue' /* webpackChunkName: "components/section1" */).then(c => wrapFunctional(c.default || c)),
  Section2: () => import('../../components/section2.vue' /* webpackChunkName: "components/section2" */).then(c => wrapFunctional(c.default || c)),
  Section3: () => import('../../components/section3.vue' /* webpackChunkName: "components/section3" */).then(c => wrapFunctional(c.default || c)),
  Section4: () => import('../../components/section4.vue' /* webpackChunkName: "components/section4" */).then(c => wrapFunctional(c.default || c)),
  HeroBasic: () => import('../../components/hero/Basic.vue' /* webpackChunkName: "components/hero-basic" */).then(c => wrapFunctional(c.default || c)),
  HeroCarousel: () => import('../../components/hero/Carousel.vue' /* webpackChunkName: "components/hero-carousel" */).then(c => wrapFunctional(c.default || c)),
  HeroVideo: () => import('../../components/hero/Video.vue' /* webpackChunkName: "components/hero-video" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
