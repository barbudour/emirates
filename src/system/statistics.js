import Vue from 'vue'
import VueAnalytics from 'vue-analytics'
import VueYandexMetrika from 'vue-yandex-metrika'
import router from '../router'

const isProd = process.env.NODE_ANALYTICS === 'production'
function Init() {

  const YM_ID = +process.env.VUE_APP_YM_ID || 12345678;
  const GA_ID = process.env.VUE_APP_GA_ID || 'UA-00000000-00';

  if ((isProd && GA_ID != "UA-00000000-00") || !isProd) {
    Vue.use(VueAnalytics, {
      id: GA_ID,
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
  }
  if ((isProd && YM_ID != 12345678) || !isProd) {
    Vue.use(VueYandexMetrika, {
      id: YM_ID,
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
  /*eslint-disable */
  if (!isProd) console.log("YM_ID: " + YM_ID)
  /*eslint-enable */
}



var on_load_mixin = {
  mounted() {
    if (process.env.VUE_APP_PAGE_LOADED == "true") {
      let v = this;
      window.addEventListener("load", function () {
        v.$ga.event("internal", "load", "page_loaded");
      });
    }
  }
}
export { Init, on_load_mixin };
