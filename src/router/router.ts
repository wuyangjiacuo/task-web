/*
 * @Author: jiangxiaoxiang 
 * @Date: 2019-05-27 11:45:18 
 * @Last Modified by: jiangxiaoxiang
 * @Last Modified time: 2019-05-28 14:54:29
 */
export default [
  // {
  //   path: '/',
  //   redirect: '/index'
  // },
  {
    path: "/",
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue'),
    meta: {
      icon: '',
      keepAlive: true,
      title: 'login'
    }
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/home.vue'),
    redirect: '/main',
    meta: {
      icon: '',
      keepAlive: true,
      title: 'home'
    },
    children: [
      {
        path: '/main',
        name: 'main',
        component: () => import('@/views/home/main/main.vue'),
        meta: {
          icon: '',
          keepAlive: true,
          title: 'main'
        }
      }
    ]
  },
]