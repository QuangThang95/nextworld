import { wrapFunctional } from './utils'

export { default as Section1 } from '../../components/section1.vue'
export { default as Section2 } from '../../components/section2.vue'
export { default as Section3 } from '../../components/section3.vue'
export { default as Section4 } from '../../components/section4.vue'
export { default as HeroBasic } from '../../components/hero/Basic.vue'
export { default as HeroCarousel } from '../../components/hero/Carousel.vue'
export { default as HeroVideo } from '../../components/hero/Video.vue'

export const LazySection1 = import('../../components/section1.vue' /* webpackChunkName: "components/section1" */).then(c => wrapFunctional(c.default || c))
export const LazySection2 = import('../../components/section2.vue' /* webpackChunkName: "components/section2" */).then(c => wrapFunctional(c.default || c))
export const LazySection3 = import('../../components/section3.vue' /* webpackChunkName: "components/section3" */).then(c => wrapFunctional(c.default || c))
export const LazySection4 = import('../../components/section4.vue' /* webpackChunkName: "components/section4" */).then(c => wrapFunctional(c.default || c))
export const LazyHeroBasic = import('../../components/hero/Basic.vue' /* webpackChunkName: "components/hero-basic" */).then(c => wrapFunctional(c.default || c))
export const LazyHeroCarousel = import('../../components/hero/Carousel.vue' /* webpackChunkName: "components/hero-carousel" */).then(c => wrapFunctional(c.default || c))
export const LazyHeroVideo = import('../../components/hero/Video.vue' /* webpackChunkName: "components/hero-video" */).then(c => wrapFunctional(c.default || c))
