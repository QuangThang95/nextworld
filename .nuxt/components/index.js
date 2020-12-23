export { default as Section1 } from '../../components/section1.vue'
export { default as Section2 } from '../../components/section2.vue'
export { default as Section3 } from '../../components/section3.vue'
export { default as Section4 } from '../../components/section4.vue'
export { default as Basic } from '../../components/hero/Basic.vue'
export { default as Carousel } from '../../components/hero/Carousel.vue'

export const LazySection1 = import('../../components/section1.vue' /* webpackChunkName: "components/section1" */).then(c => c.default || c)
export const LazySection2 = import('../../components/section2.vue' /* webpackChunkName: "components/section2" */).then(c => c.default || c)
export const LazySection3 = import('../../components/section3.vue' /* webpackChunkName: "components/section3" */).then(c => c.default || c)
export const LazySection4 = import('../../components/section4.vue' /* webpackChunkName: "components/section4" */).then(c => c.default || c)
export const LazyBasic = import('../../components/hero/Basic.vue' /* webpackChunkName: "components/hero/Basic" */).then(c => c.default || c)
export const LazyCarousel = import('../../components/hero/Carousel.vue' /* webpackChunkName: "components/hero/Carousel" */).then(c => c.default || c)
