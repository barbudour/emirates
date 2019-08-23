"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var data = require('../data');

_vue.default.use(_vueRouter.default);

var routes = [
  {
    path: '/'
  }
];

if (data.share.dynamic_shares.length > 0) {
  data.share.dynamic_shares.forEach(function (el) {
    routes.push({
      path: Object.keys(el)[0]
    });
  });
}

var router = new _vueRouter.default({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
});

if (data.share.dynamic_shares.length > 0) {
  router.beforeEach(function (to, from, next) {
    if (data.share.dynamic_shares[to] === undefined || data.share.dynamic_shares[to] === null) {
      document.querySelector('meta[property="og:image"]')['content'] = '/' + data.share.default_img;
      document.querySelector('meta[property="og:title"]')['content'] = '/' + data.share.title;
      document.querySelector('meta[property="og:description"]')['content'] = '/' + data.share.description;
      document.querySelector('meta[name="twitter:image"]')['content'] = '/' + data.share.default_img;
    } else {
      document.querySelector('meta[property="og:image"]')['content'] = '/' + data.share.dynamic_shares[to].img;
      document.querySelector('meta[property="og:title"]')['content'] = '/' + data.share.dynamic_shares[to].title;
      document.querySelector('meta[property="og:description"]')['content'] = '/' + data.share.dynamic_shares[to].description;
      document.querySelector('meta[name="twitter:image"]')['content'] = '/' + data.share.dynamic_shares[to].img;
    }

    next();
  });
}

var _default = router;
exports.default = _default;