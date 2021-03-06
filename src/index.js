import Title from './components/Title.vue'
import Tree from './components/Tree.vue'
import Thumbnails from './components/Thumbnails.vue'
import mixins from './mixins/manifesto-vue-mixins'

// Install the components
export function install (Vue) {
  Vue.component('title', Title)
  Vue.component('tree', Tree)
  Vue.component('thumbnails', Thumbnails)
  Vue.component('mixins', mixins)
  /* -- Add more components here -- */
}

// Expose the components
export {
  Title,
  mixins,
  Tree,
  Thumbnails,
  /* -- Add more components here -- */
}

/* -- Plugin definition & Auto-install -- */
/* You shouldn't have to modify the code below */

// Plugin
const plugin = {
  /* eslint-disable no-undef */
  version: VERSION,
  install,
}

export default plugin

// Auto-install
let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}
if (GlobalVue) {
  GlobalVue.use(plugin)
}
