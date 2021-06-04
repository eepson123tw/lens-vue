import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [{
  path: '/',
  name: 'Home',
  component: Home,
  meta: { title: 'OLD-lens' }
},
{
  path: '/Backstage',
  name: 'Backstage',
  meta: { title: 'Backstage' },
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () =>
    import(/* webpackChunkName: "about" */ '../views/Backstage.vue')
},
{
  path: '/BackstagePage',
  name: 'BackstagePage',
  meta: { title: 'BackstagePage' },
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () =>
    import(/* webpackChunkName: "about" */ '../views/BackstagePage.vue')
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title
  next()
})

export default router
