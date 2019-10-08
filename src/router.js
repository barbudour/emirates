import Vue from 'vue'
import Router from 'vue-router'
import data from '../data'

Vue.use(Router)

let routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('./views/home.vue')
  },
  {
    path: '/maldives',
    name: 'A1',
    component: () => import('./views/maldives.vue')
  },
  {
    path: '/bali',
    name: 'A2',
    component: () => import('./views/bali.vue')
  },
  {
    path: '/seychelles',
    name: 'A3',
    component: () => import('./views/seychelles.vue')
  },
  // {
  //   path: '/vietnam',
  //   name: 'B1',
  //   component: () => import('./views/vietnam.vue')
  // },
  // {
  //   path: '/bali2',
  //   name: 'B2',
  //   component: () => import('./views/bali2.vue')
  // },
  // {
  //   path: '/maldives2',
  //   name: 'B3',
  //   component: () => import('./views/maldives2.vue')
  // },
  // {
  //   path: '/seychelles2',
  //   name: 'B4',
  //   component: () => import('./views/seychelles2.vue')
  // },
  {
    path: '/dubai',
    name: 'C1',
    component: () => import('./views/dubai.vue')
  },
  {
    path: '/colombia',
    name: 'C2',
    component: () => import('./views/colombia.vue')
  },
  {
    path: '/maldives3',
    name: 'C3',
    component: () => import('./views/maldives3.vue')
  },
  {
    path: '/vietnam2',
    name: 'C4',
    component: () => import('./views/vietnam2.vue')
  },
  {
    path: '/phuket',
    name: 'D2',
    component: () => import('./views/phuket.vue')
  },
  {
    path: '/bali3',
    name: 'D3',
    component: () => import('./views/bali3.vue')
  },
  {
    path: '/colombia2',
    name: 'D4',
    component: () => import('./views/colombia2.vue')
  },
  {
    path: '/vietnam3',
    name: 'random',
    component: () => import('./views/vietnam3.vue')
  }
];

if (Object.keys(data.share.dynamic_shares).length > 0) {
  Object.keys(data.share.dynamic_shares).forEach((el) => {
    routes.push({
      path: '/' + el,
      name: el
    })
  })

}


const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

if (Object.keys(data.share.dynamic_shares).length > 0) {
  router.beforeEach((to, from, next) => {
    if (data.share.dynamic_shares[to.name] === undefined || data.share.dynamic_shares[to.name] === null) {
      document.querySelector('meta[property="og:image"]')['content'] = data.share.default_img
      document.querySelector('meta[property="og:title"]')['content'] = data.share.title
      document.querySelector('meta[property="og:description"]')['content'] = data.share.description
      document.querySelector('meta[name="twitter:image"]')['content'] = data.share.default_img
    } else {
      document.querySelector('meta[property="og:image"]')['content'] = data.share.dynamic_shares[to.name].img
      document.querySelector('meta[property="og:title"]')['content'] = data.share.dynamic_shares[to.name].title
      document.querySelector('meta[property="og:description"]')['content'] = data.share.dynamic_shares[to.name].description
      document.querySelector('meta[name="twitter:image"]')['content'] = data.share.dynamic_shares[to.name].img
    }
    next()
  });
}


export default router
