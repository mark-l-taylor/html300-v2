import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

// Add the scss style sheets from assignment06
import './scss/style.scss'

// Import the vue templates
import App from './App.vue'
import SM_Home from './views/SM_Home.vue'
import SM_Players from './views/SM_Players.vue'
import SM_Scores from './views/SM_Scores.vue'
import SM_Rules from './views/SM_Rules.vue'
import SM_Howto from './views/SM_Howto.vue'

Vue.config.productionTip = false

// Import the vue-router
import VueRouter from 'vue-router'
// Add the Router plugin
Vue.use(VueRouter)

// Define the routes
const routes = [
  { path: '/players', name:'Players', component: SM_Players},
  { path: '/scores', name:'Scores', component: SM_Scores},
  { path: '/rules', name:'Rules', component: SM_Rules},
  { path: '/howto', name:'Howto', component: SM_Howto},
  { path: '/', name: 'Home', component: SM_Home},
]

// Create the router instance
const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
