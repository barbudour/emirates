import Vue from 'vue'
import VueAnalytics from 'vue-analytics'
import VueYandexMetrika from 'vue-yandex-metrika'
import router from './router'
import settings from './settings'

const isProd = process.env.NODE_ENV === 'production'
function Init() {

  Vue.use(VueAnalytics, {
    id: settings.ids.gaID,
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
    id: settings.ids.yaID,
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
export { Init };
