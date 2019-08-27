import Vue from 'vue'
import Router from 'vue-router'
const data = require('../data')

Vue.use(Router)

let routes = [
  {
    path: '/',
  }
];

if (Object.keys(data.share.dynamic_shares).length > 0) {
  Object.keys(data.share.dynamic_shares).forEach((el) => {
    routes.push({
      path: el,
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
    if (data.share.dynamic_shares[to.path] === undefined || data.share.dynamic_shares[to.path] === null) {
      document.querySelector('meta[property="og:image"]')['content'] = data.share.default_img
      document.querySelector('meta[property="og:title"]')['content'] = data.share.title
      document.querySelector('meta[property="og:description"]')['content'] = data.share.description
      document.querySelector('meta[name="twitter:image"]')['content'] = data.share.default_img
    } else {
      document.querySelector('meta[property="og:image"]')['content'] = data.share.dynamic_shares[to.path].img
      document.querySelector('meta[property="og:title"]')['content'] = data.share.dynamic_shares[to.path].title
      document.querySelector('meta[property="og:description"]')['content'] = data.share.dynamic_shares[to.path].description
      document.querySelector('meta[name="twitter:image"]')['content'] = data.share.dynamic_shares[to.path].img
    }
    next()
  });
}


export default router
