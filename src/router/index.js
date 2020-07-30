import Vue from 'vue'
import VueRouter from 'vue-router'

const profile = ()=> import('../views/profile/profile.vue')
const home = ()=> import('../views/home/home.vue')
const cartgory = ()=> import('../views/cartgory/cartgory.vue')
const cart = ()=> import('../views/cart/cart.vue')

Vue.use(VueRouter)

  const routes = [
     {path:'',redirect:'/home'},
     {path:'/home',component:home},
     {path:'/profile',component:profile},
     {path:'/bart',component:cart},
     {path:'/cartgory',component:cartgory}
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
