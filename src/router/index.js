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
  console.log(to, from, next)
  // next類似管線，這關過了，交給下一關處理，有暫停處理的效過Ex: 非同步的檢查、需要花時間的處理、轉導頁，如果不加上，頁面不會往下走

  window.document.title = to.meta.title
  next()
})

export default router
