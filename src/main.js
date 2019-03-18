import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import AppCustomers from './components/AppCustomers'
import AppProducts from './components/AppProducts'



Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  {path:'/',component: AppCustomers},
  {path:'/customers',component: AppCustomers},
  {path:'/products',component: AppProducts},
  {path:'/customers/:id',component: AppCustomers, name:"latest-purchases"},
  {path:'/products/:id',component: AppProducts, name:"single-product"}
  
]

const router = new VueRouter({
  routes: routes,
  mode:'history'
  
})


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')