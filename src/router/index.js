import Vue from 'vue'
import VueRouter from 'vue-router'
import 'bootstrap'
import Home from '../views/Home.vue'
import NovaObjava from '../views/NovaObjava'
import Profil from '../views/Profil'

import Kontakt from '@/components/Kontakt'
import Prijava from '@/components/Prijava'
import Objava from '@/components/Objava'
import Registracija from '@/components/Registracija'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/nova-objava',
    name: 'NovaObjava',
    component: NovaObjava
  },
  {
    path: '/objava',
    name: 'Objava',
    component: Objava
  },
  {
    path: '/kontakt',
    name: 'Kontakt',
    component: Kontakt
  },
  {
    path: '/profil',
    name: 'Profil',
    component: Profil
  },
  {
    path: '/prijava',
    name: 'Prijava',
    component: Prijava
  },
  {
    path: '/registracija',
    name: 'Registracija',
    component: Registracija
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
