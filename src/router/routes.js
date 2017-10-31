import docs from '@/docs/routes'
import examples from '@/examples/routes'

/**
 * Every route becomes a chunk, loaded only when used.
 * Reduces size of initial App load.
 */
const routes = [
  {
    name: 'login',
    path: '/login',
    component: () => import(/* webpackChunkName: "login" */ '@/features/login/login-page.vue'),
    title: 'Login',
    layout: 'LayoutNoAuth',
    isPublic: true
  }
]

export default [...routes, ...docs, ...examples]