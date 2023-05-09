// Composables
import { createRouter, createWebHistory } from 'vue-router'
import SetUp from '../pages/SetUp.vue'

const routes = [
  //2 pages: one: create-session, two: running session, redirect to one (create session)
  {
    path: '/',
    //component: () => import('@/layouts/default/Default.vue'),
    name: 'SetUp',
    component: SetUp,
    //component: () => import('@/pages/SetUp.vue'),

    /* children: [
      {
        path: '',
        name: 'Home', */
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        /* component: () => import( *//* webpackChunkName: "home" */ /* '@/pages/Home.vue'), */
    /*   },
    ], */
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
