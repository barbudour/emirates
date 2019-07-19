import Vue from 'vue'
import VueAnalytics from 'vue-analytics'
import VueYandexMetrika from 'vue-yandex-metrika'
import router from '../router'

const isProd = process.env.NODE_ENV === 'production'
function Init() {

  Vue.use(VueAnalytics, {
    id: process.env.GA_ID || 'UA-00000000-00',
    router,
    commands: {
      click(category, action, label) {
        this.$ga.event(category, action, label)
      }
    },
    debug: {
      enabled: !isProd,
      sendHitTask: isProd
    },

  })
  Vue.use(VueYandexMetrika, {
    id: +process.env.YM_ID || 12345678,
    router: router,
    env: process.env.NODE_ENV,
    debug: !isProd,
    scriptSrc: 'https://mc.yandex.ru/metrika/tag.js',
    options: {
      clickmap: true,
      trackLinks: true,
      accurateTrackBounce: true,
      webvisor: true,
    }
  })
}

var on_load_mixin = {
  mounted() {
    if (process.env.PAGE_LOADED) {
      let v = this;
      window.addEventListener("load", function () {
        v.$ga.event("internal", "load", "page_loaded");
      });
    }
  }
}
export { Init, on_load_mixin };
