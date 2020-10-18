import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Page1 from '../views/page1.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/page1'
  },
  {
    path: '/page1',
    component: Page1
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
