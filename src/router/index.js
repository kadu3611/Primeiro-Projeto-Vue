import Vue from 'vue'
import Router from 'vue-router'
import Navbar from '@/components/Navbar'
import About from '../Views/About'
import Config from '../Views/Config'
import Home from '../Views/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Navbar',
      component: Navbar
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/config',
      name: 'Config',
      component: Config
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})
