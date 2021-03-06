// based on `vue-sfc-rollup`
import component from './vue-window-dimensions.vue'

// install function executed by Vue.use()
function install (Vue) {
  if (install.installed) return
  install.installed = true
  Vue.component('VueWindowDimensions', component)
}

// Create module definition for Vue.use()
const plugin = {
  install
}

// To auto-install when vue is found
/* global window global */
let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}
if (GlobalVue) {
  GlobalVue.use(plugin)
}

// Inject install function into component - allows component
// to be registered via Vue.use() as well as Vue.component()
component.install = install

export default component
