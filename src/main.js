import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import Home from './components/Home'
import AppCustomers from './components/AppCustomers'
import AppProducts from './components/AppProducts'
import LatestPurchases from './components/LatestPurchases'



Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  {path:'/',component: Home},
  {path:'/customers',component: AppCustomers},
  {path:'/products',component: AppProducts},
  {path:'/customers/:id',component: LatestPurchases},
  

  

]

const router = new VueRouter({
  routes: routes,
  mode:'history'
  
})


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')