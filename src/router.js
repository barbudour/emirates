import Vue from 'vue'
import Router from 'vue-router'
const data = require('../data')

Vue.use(Router)

let routes = [
  {
    path: '/',
  }
];

if (data.share.dynamic_shares.length > 0) {
  data.share.dynamic_shares.forEach((el) => {
    routes.push({
      path: Object.keys(el)[0],
    })
  })

}

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

if (data.share.dynamic_shares.length > 0) {
  router.beforeEach((to, from, next) => {
    if (data.share.dynamic_shares[to] === undefined || data.share.dynamic_shares[to] === null) {
      document.querySelector('meta[property="og:image"]')['content'] = '/' + data.share.default_img
      document.querySelector('meta[property="og:title"]')['content'] = '/' + data.share.title
      document.querySelector('meta[property="og:description"]')['content'] = '/' + data.share.description
      document.querySelector('meta[name="twitter:image"]')['content'] = '/' + data.share.default_img
    } else {
      document.querySelector('meta[property="og:image"]')['content'] = '/' + data.share.dynamic_shares[to].img
      document.querySelector('meta[property="og:title"]')['content'] = '/' + data.share.dynamic_shares[to].title
      document.querySelector('meta[property="og:description"]')['content'] = '/' + data.share.dynamic_shares[to].description
      document.querySelector('meta[name="twitter:image"]')['content'] = '/' + data.share.dynamic_shares[to].img
    }
    next()
  });
}


export default router
