export { default as About } from '../../components/About.vue'
export { default as AppBar } from '../../components/AppBar.vue'
export { default as Hero } from '../../components/Hero.vue'

export const LazyAbout = import('../../components/About.vue' /* webpackChunkName: "components/About" */).then(c => c.default || c)
export const LazyAppBar = import('../../components/AppBar.vue' /* webpackChunkName: "components/AppBar" */).then(c => c.default || c)
export const LazyHero = import('../../components/Hero.vue' /* webpackChunkName: "components/Hero" */).then(c => c.default || c)
