import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const route = new Router({
    modo: 'history',
    base: process.env.BASE_URL,
    routes:[{
        path:'/',
        name: 'home',
        component:()=>import('./views/home.vue')
    }]
})

export default route;