import { createRouter, createWebHistory } from 'vue-router'

import MainPage from '../pages/Main.vue'
import Contacts from '../pages/Contacts.vue'
import Carpetner from '../pages/Carpetner.vue'
import Plumber from '../pages/Plumber.vue'
import Plumbing from '../pages/Plumbing.vue'
import Renovation from '../pages/Renovation.vue'
import Overhaul from '../pages/Overhaul.vue'
import Redecorating from '../pages/Redecorating.vue'

import Portfolio from '../components/Portfolio.vue'
import About from '../components/About.vue'

const routes = [
  {
    path: '/', //Главная
    name: 'main',
    component: MainPage
  },
  {
    path: '/contacts', //Контакты
    name: 'contacts',
    component: Contacts
  },
  {
    path: '/carpetner', //вызов плотника
    name: 'carpetner',
    component: Carpetner
  },
  {
    path: '/plumber', //Вызов сантехника
    name: 'plumber',
    component: Plumber
  },
  {
    path: '/plumbing', //Установка и ремонт сантехники
    name: 'plumbing',
    component: Plumbing
  },
  {
    path: '/renovation', //Евро ремонт
    name: 'renovation',
    component: Renovation
  },
  {
    path: '/overhaul', //Капитальный ремонт
    name: 'overhaul',
    component: Overhaul
  },
  {
    path: '/redecorating', //Косметический ремонт
    name: 'redecorating',
    component: Redecorating
  },
  {
    path: '/portfolio', //Косметический ремонт
    name: 'portfolio',
    component: Portfolio
  },{
    path: '/about', //Косметический ремонт
    name: 'about',
    component: About
  },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
