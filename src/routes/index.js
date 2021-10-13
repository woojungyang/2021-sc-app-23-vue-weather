import Vue from 'vue'
import VueRouter from 'vue-router'
import withComponent from '../components/hoc/withComponent'
// 일괄 롣딩
// import Daily from '../views/Daily.vue'
// import Days from '../views/Days.vue'

// 지연로딩
const Daily = () => import('../views/Daily.vue')
const Days = () => import('../views/Days.vue')
const Posts = () => import('../views/PostCp.vue')
const Users = () => import('../views/UserCp.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Daily',
    component: Daily
  },
  {
    path: '/5days',
    name: 'Days',
    component: Days
  },
  {
    path: '/users',
    name: 'Users',
    component: withComponent('Users')(Users)('https://jsonplaceholder.typicode.com/users')
  },
  {
    path: '/posts',
    name: 'Posts',
    component: withComponent('Posts')(Posts)('https://jsonplaceholder.typicode.com/users')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
