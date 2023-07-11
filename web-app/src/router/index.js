// Composables
import { createRouter, createWebHistory } from 'vue-router'
import SetUp from '../pages/SetUp.vue'
import RunningSession from '../pages/RunningSession.vue'

const routes = [
  //2 pages: one: create-session, two: running session, redirect to one (create session)
  {
    path: '/',
    name: 'SetUp',
    component: SetUp,
  },
  {
    path: '/RunningSession/:patientId/:patientName/:therapistName/:scenarioTitle', //:sessionId deleted
    name: 'RunningSession',
    component: RunningSession,
    props: true
  }
  //for creating running session front end
  /*  {
     path: '/',
     name: 'RunningSession',
     component: RunningSession,
   } */
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
