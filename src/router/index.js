import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Friends from '../views/Friends';
import Login from '../views/Login';
import Moments from '../views/Moments';
import NotFound from '../views/NotFound';
import Register from '../views/Register';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/friends/',
    name: 'friends',
    component: Friends
  },
  {
    path: '/moments/:userId/',
    name: 'moments',
    component: Moments
  },
  {
    path: '/login/',
    name: 'login',
    component: Login
  },
  {
    path: '/register/',
    name: 'register',
    component: Register
  },
  {
    path: '/404/',
    name: '404',
    component: NotFound
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/404/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
