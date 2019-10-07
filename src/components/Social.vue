<template>
  <div class="social">
    <!-- <span class="social__bg" @click="shareOpen"></span>
    <span class="social__close" @click="shareOpen"></span> -->
    <yandex-share
      :title="title"
      :description="description"
      :image="image"
      :url="url"
      :services="services"
      :contentByService="contentByService"
      @share="share"
    />
    <div class="social__share-wrapper" v-ga.click="$ga.commands.click.bind(this,'external', 'click', 'share')">
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 103.9 96"
        style="enable-background:new 0 0 103.9 96;"
        xml:space="preserve"
        class="social__share"
      >
        <g>
          <path
            class=""
            d="M71.5,15.3c4.6,0,8.9,1.8,12.2,5c6.7,6.7,6.7,17.6,0,24.3L52,76.3L20.3,44.7c-6.7-6.7-6.7-17.6,0-24.3 c3.2-3.2,7.6-5,12.2-5s8.9,1.8,12.2,5l7.3,7.3l7.3-7.3C62.5,17.1,66.9,15.3,71.5,15.3 M71.5,5C64.4,5,57.4,7.7,52,13 c-5.4-5.4-12.4-8-19.5-8S18.4,7.7,13,13C2.3,23.7,2.3,41.3,13,52l39,39l39-39c10.7-10.7,10.7-28.2,0-39C85.6,7.7,78.5,5,71.5,5 L71.5,5z"
          ></path>
        </g>
      </svg>
    </div>
  </div>
</template>

<script>
import { toggleClass } from '../helpers/index';
import YandexShare from "@cookieseater/vue-yandex-share";
export default {
  name: "Social",
  props: {
    res: {
      type: String,
      required: false,
      default: '',
    },
    picture: {
      type: Number,
      required: false,
      default: 0,
    },
    correct: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  components: {
    YandexShare
  },
  methods: {
    share(name) {
      this.$ga.event('external', 'click', `share_${name}${this.res}`);
    },
    shareOpen() {
      if (window.innerWidth <= 660) toggleClass(document.body, 'blurred');
    },
  },
  computed: {
    description() {
      let dsc = 'Отгадайте, что изображено на картинах российских художников-авангардистов';
      if (this.correct) {
        dsc = 'Супрематизм или Supreme Кажется, абстрактная живопись не ваша сильная сторона';
        if (this.correct >= 4 && this.correct < 7) dsc = 'Ретроград в авангарде Про супрематизм и футуризм вы возможно слышали';
        if (this.correct >= 7) dsc = 'Магистр авангардных искусств Ваш следующий шаг - собственная выставка';
      }
      return dsc;
    },
    image() {
      let pictSrc = 'default';
      if (this.correct) {
        pictSrc = '1';
        if (this.correct >= 4 && this.correct <= 7) pictSrc = '2';
        if (this.correct >= 8) pictSrc = '3';
      }
      return `${location.origin}/share/share_${pictSrc}.jpg`;
    },
    url() {
      let url = location.origin + '/';
      const pictSrc = this.picture ? this.picture - 1 : '';
      if (this.correct) {
        url = location.origin + '/1';
        if (this.correct >= 4 && this.correct <= 7) url = location.origin + '/2';
        if (this.correct >= 8) url = location.origin + '/3';
      }
      return `${url}${pictSrc}`;
    },
    contentByService() {
      let vkText = this.res.length > 0 ? this.description : `Липтон ${this.description}`
      let oktext = this.res.length > 0 ? '' :'Липтон'
      return {
        vkontakte: {
          title: vkText,
        },
        odnoklassniki: {
          title: oktext,
          description: this.description,
        }
      };
    },
  },
  data() {
    return {
      title: 'Липтон',
      services: [
        'vkontakte',
        'facebook',
        'odnoklassniki',
        'telegram',
        'twitter'
      ],
    }
  }
};
</script>

<style lang="scss" >
@import '../assets/styles/_responsive.scss';

.social {
  position: absolute;
  bottom: vw(36);
  right: vw(39);
  height: vw(24);
  fill: #fff;
  display: flex;
  align-items: flex-start;
  justify-content: stretch;
  cursor: pointer;
  // @media $mobile
  //   h vm(28)
  //   r vm(40)
  //   b vm(46)
  
  &:hover {
    .ya-share2 {
      width: vw(125);
      // w vw(98)
      opacity: 1;
      visibility: visible;
      transition: .35s opacity, .35s visibility;
      // @media $mobile
      //   w vm(175)
    }
  }

  .footer {
    justify-content: flex-end;
  // @media $desktop
  }
  &__share {
    width: vw(19);
    fill: white;
    transition: .35s opacity;
    // @media $mobile
    //   size vm(31) vm(28)
    &:hover {
      opacity: .7;
    }
    &-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      width: vw(24);
      height: vw(24);
      // @media $mobile
      //   size vm(31) vm(28)
    }
  }
  .ya-share2 {
    width: vw(0);
    opacity: 0;
    visibility: hidden;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    // @media $mobile
    //   pr vm(7)
    //   justify-content flex-end
    &__item {
      .ya-share2__item {         
        margin-left: vw(3);
        // @media $mobile
        //   ml vm(1)
      }
    }
    &__link {
      display: block;
      flex: 0 0 1em;
      font-size: vw(22);
      line-height: 1;
      color: white;
      transition: color 0.2s, .35s opacity;
      width: vw(18);
      height: vw(18);
      // @media $mobile
      //   size vm(28)
      //   font-size vm(22)
    }
    &__title {
      display: none;
    }
    &__title,
    &__badge {
      vertical-align: middle;
    }
    &__badge {
      background: transparent!important;
    }
    &__badge,
    &__icon,
    .icon {
      display: block;
      box-sizing: border-box;
      width: 100%!important;
      height: 100%!important;
    }
    &__icon {
      padding: 0;
      transition: .35s opacity, .5s background-image;
      &:hover {
        opacity: .7;
      }
    }
  }
}

  // .ya-share2__item_service_odnoklassniki .ya-share2__icon {
  //   background: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='%23000' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill-rule='evenodd'%3E%3Cpath d='M11.674 6.536a1.69 1.69 0 0 0-1.688 1.688c0 .93.757 1.687 1.688 1.687a1.69 1.69 0 0 0 1.688-1.687 1.69 1.69 0 0 0-1.688-1.688zm0 5.763a4.08 4.08 0 0 1-4.076-4.075 4.08 4.08 0 0 1 4.076-4.077 4.08 4.08 0 0 1 4.077 4.077 4.08 4.08 0 0 1-4.077 4.075zM10.025 15.624a7.633 7.633 0 0 1-2.367-.98 1.194 1.194 0 0 1 1.272-2.022 5.175 5.175 0 0 0 5.489 0 1.194 1.194 0 1 1 1.272 2.022 7.647 7.647 0 0 1-2.367.98l2.279 2.28a1.194 1.194 0 0 1-1.69 1.688l-2.238-2.24-2.24 2.24a1.193 1.193 0 1 1-1.689-1.689l2.279-2.279'/%3E%3C/g%3E%3C/svg%3E")!important;
  //   .result {
  //     background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='%23676767' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill-rule='evenodd'%3E%3Cpath d='M11.674 6.536a1.69 1.69 0 0 0-1.688 1.688c0 .93.757 1.687 1.688 1.687a1.69 1.69 0 0 0 1.688-1.687 1.69 1.69 0 0 0-1.688-1.688zm0 5.763a4.08 4.08 0 0 1-4.076-4.075 4.08 4.08 0 0 1 4.076-4.077 4.08 4.08 0 0 1 4.077 4.077 4.08 4.08 0 0 1-4.077 4.075zM10.025 15.624a7.633 7.633 0 0 1-2.367-.98 1.194 1.194 0 0 1 1.272-2.022 5.175 5.175 0 0 0 5.489 0 1.194 1.194 0 1 1 1.272 2.022 7.647 7.647 0 0 1-2.367.98l2.279 2.28a1.194 1.194 0 0 1-1.69 1.688l-2.238-2.24-2.24 2.24a1.193 1.193 0 1 1-1.689-1.689l2.279-2.279'/%3E%3C/g%3E%3C/svg%3E")!important;
      
  //     // &:hover {
  //     //   opacity: 1;
  //     //   background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='%23fff' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill-rule='evenodd'%3E%3Cpath d='M11.674 6.536a1.69 1.69 0 0 0-1.688 1.688c0 .93.757 1.687 1.688 1.687a1.69 1.69 0 0 0 1.688-1.687 1.69 1.69 0 0 0-1.688-1.688zm0 5.763a4.08 4.08 0 0 1-4.076-4.075 4.08 4.08 0 0 1 4.076-4.077 4.08 4.08 0 0 1 4.077 4.077 4.08 4.08 0 0 1-4.077 4.075zM10.025 15.624a7.633 7.633 0 0 1-2.367-.98 1.194 1.194 0 0 1 1.272-2.022 5.175 5.175 0 0 0 5.489 0 1.194 1.194 0 1 1 1.272 2.022 7.647 7.647 0 0 1-2.367.98l2.279 2.28a1.194 1.194 0 0 1-1.69 1.688l-2.238-2.24-2.24 2.24a1.193 1.193 0 1 1-1.689-1.689l2.279-2.279'/%3E%3C/g%3E%3C/svg%3E")!important;
  //     // }
  //   }
  // }

  // .ya-share2__item_service_facebook .ya-share2__icon {
  //   background: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='%23000' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13.423 20v-7.298h2.464l.369-2.845h-2.832V8.042c0-.824.23-1.385 1.417-1.385h1.515V4.111A20.255 20.255 0 0 0 14.148 4c-2.183 0-3.678 1.326-3.678 3.76v2.097H8v2.845h2.47V20h2.953z'  fill-rule='evenodd'/%3E%3C/svg%3E")!important;
  //   .result {
  //     background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='%23676767' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13.423 20v-7.298h2.464l.369-2.845h-2.832V8.042c0-.824.23-1.385 1.417-1.385h1.515V4.111A20.255 20.255 0 0 0 14.148 4c-2.183 0-3.678 1.326-3.678 3.76v2.097H8v2.845h2.47V20h2.953z'  fill-rule='evenodd'/%3E%3C/svg%3E")!important;
  //     // @media $desktop
  //     //   &:hover
  //     //     opacity 1
  //     //     background-image url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='%23fff' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13.423 20v-7.298h2.464l.369-2.845h-2.832V8.042c0-.824.23-1.385 1.417-1.385h1.515V4.111A20.255 20.255 0 0 0 14.148 4c-2.183 0-3.678 1.326-3.678 3.76v2.097H8v2.845h2.47V20h2.953z'  fill-rule='evenodd'/%3E%3C/svg%3E")!important
  //   }
  // }

  // .ya-share2__item_service_vkontakte .ya-share2__icon {
  //   background: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='%23000' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.785 16.241s.288-.032.436-.194c.136-.148.132-.427.132-.427s-.02-1.304.576-1.496c.588-.19 1.341 1.26 2.14 1.818.605.422 1.064.33 1.064.33l2.137-.03s1.117-.071.587-.964c-.043-.073-.308-.661-1.588-1.87-1.34-1.264-1.16-1.059.453-3.246.983-1.332 1.376-2.145 1.253-2.493-.117-.332-.84-.244-.84-.244l-2.406.015s-.178-.025-.31.056c-.13.079-.212.262-.212.262s-.382 1.03-.89 1.907c-1.07 1.85-1.499 1.948-1.674 1.832-.407-.267-.305-1.075-.305-1.648 0-1.793.267-2.54-.521-2.733-.262-.065-.454-.107-1.123-.114-.858-.009-1.585.003-1.996.208-.274.136-.485.44-.356.457.159.022.519.099.71.363.246.341.237 1.107.237 1.107s.142 2.11-.33 2.371c-.325.18-.77-.187-1.725-1.865-.489-.859-.859-1.81-.859-1.81s-.07-.176-.198-.272c-.154-.115-.37-.151-.37-.151l-2.286.015s-.343.01-.469.161C3.94 7.721 4.043 8 4.043 8s1.79 4.258 3.817 6.403c1.858 1.967 3.968 1.838 3.968 1.838h.957z' fill-rule='evenodd'/%3E%3C/svg%3E")!important;
  //   .result {
  //     background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='%23676767' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.785 16.241s.288-.032.436-.194c.136-.148.132-.427.132-.427s-.02-1.304.576-1.496c.588-.19 1.341 1.26 2.14 1.818.605.422 1.064.33 1.064.33l2.137-.03s1.117-.071.587-.964c-.043-.073-.308-.661-1.588-1.87-1.34-1.264-1.16-1.059.453-3.246.983-1.332 1.376-2.145 1.253-2.493-.117-.332-.84-.244-.84-.244l-2.406.015s-.178-.025-.31.056c-.13.079-.212.262-.212.262s-.382 1.03-.89 1.907c-1.07 1.85-1.499 1.948-1.674 1.832-.407-.267-.305-1.075-.305-1.648 0-1.793.267-2.54-.521-2.733-.262-.065-.454-.107-1.123-.114-.858-.009-1.585.003-1.996.208-.274.136-.485.44-.356.457.159.022.519.099.71.363.246.341.237 1.107.237 1.107s.142 2.11-.33 2.371c-.325.18-.77-.187-1.725-1.865-.489-.859-.859-1.81-.859-1.81s-.07-.176-.198-.272c-.154-.115-.37-.151-.37-.151l-2.286.015s-.343.01-.469.161C3.94 7.721 4.043 8 4.043 8s1.79 4.258 3.817 6.403c1.858 1.967 3.968 1.838 3.968 1.838h.957z' fill-rule='evenodd'/%3E%3C/svg%3E")!important;
  //     // @media $desktop
  //     //   &:hover
  //     //     opacity 1
  //     //     background-image url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='%23fff' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.785 16.241s.288-.032.436-.194c.136-.148.132-.427.132-.427s-.02-1.304.576-1.496c.588-.19 1.341 1.26 2.14 1.818.605.422 1.064.33 1.064.33l2.137-.03s1.117-.071.587-.964c-.043-.073-.308-.661-1.588-1.87-1.34-1.264-1.16-1.059.453-3.246.983-1.332 1.376-2.145 1.253-2.493-.117-.332-.84-.244-.84-.244l-2.406.015s-.178-.025-.31.056c-.13.079-.212.262-.212.262s-.382 1.03-.89 1.907c-1.07 1.85-1.499 1.948-1.674 1.832-.407-.267-.305-1.075-.305-1.648 0-1.793.267-2.54-.521-2.733-.262-.065-.454-.107-1.123-.114-.858-.009-1.585.003-1.996.208-.274.136-.485.44-.356.457.159.022.519.099.71.363.246.341.237 1.107.237 1.107s.142 2.11-.33 2.371c-.325.18-.77-.187-1.725-1.865-.489-.859-.859-1.81-.859-1.81s-.07-.176-.198-.272c-.154-.115-.37-.151-.37-.151l-2.286.015s-.343.01-.469.161C3.94 7.721 4.043 8 4.043 8s1.79 4.258 3.817 6.403c1.858 1.967 3.968 1.838 3.968 1.838h.957z' fill-rule='evenodd'/%3E%3C/svg%3E")!important
  //   }
  // }

  // .ya-share2__item_service_telegram .ya-share2__icon {
  //   background: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='%23000' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M18.92 6.089L4.747 11.555c-.967.388-.962.928-.176 1.168l3.534 1.104 1.353 4.146c.164.454.083.634.56.634.368 0 .53-.168.736-.368.13-.127.903-.88 1.767-1.719l3.677 2.717c.676.373 1.165.18 1.333-.628l2.414-11.374c.247-.99-.378-1.44-1.025-1.146zM8.66 13.573l7.967-5.026c.398-.242.763-.112.463.154l-6.822 6.155-.265 2.833-1.343-4.116z' fill-rule='evenodd'/%3E%3C/svg%3E")!important;
  //   .result {
  //     background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='%23676767' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M18.92 6.089L4.747 11.555c-.967.388-.962.928-.176 1.168l3.534 1.104 1.353 4.146c.164.454.083.634.56.634.368 0 .53-.168.736-.368.13-.127.903-.88 1.767-1.719l3.677 2.717c.676.373 1.165.18 1.333-.628l2.414-11.374c.247-.99-.378-1.44-1.025-1.146zM8.66 13.573l7.967-5.026c.398-.242.763-.112.463.154l-6.822 6.155-.265 2.833-1.343-4.116z' fill-rule='evenodd'/%3E%3C/svg%3E")!important;
  //     // @media $desktop
  //     //   &:hover
  //     //     opacity 1
  //     //     background-image url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='%23fff' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M18.92 6.089L4.747 11.555c-.967.388-.962.928-.176 1.168l3.534 1.104 1.353 4.146c.164.454.083.634.56.634.368 0 .53-.168.736-.368.13-.127.903-.88 1.767-1.719l3.677 2.717c.676.373 1.165.18 1.333-.628l2.414-11.374c.247-.99-.378-1.44-1.025-1.146zM8.66 13.573l7.967-5.026c.398-.242.763-.112.463.154l-6.822 6.155-.265 2.833-1.343-4.116z' fill-rule='evenodd'/%3E%3C/svg%3E")!important
  //   }
  // }

  // .ya-share2__item_service_twitter .ya-share2__icon {
  //   background: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='%23000' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 7.539a6.56 6.56 0 0 1-1.885.517 3.294 3.294 0 0 0 1.443-1.816 6.575 6.575 0 0 1-2.085.796 3.283 3.283 0 0 0-5.593 2.994A9.32 9.32 0 0 1 5.114 6.6a3.28 3.28 0 0 0 1.016 4.382 3.274 3.274 0 0 1-1.487-.41v.041a3.285 3.285 0 0 0 2.633 3.218 3.305 3.305 0 0 1-1.482.056 3.286 3.286 0 0 0 3.066 2.28A6.585 6.585 0 0 1 4 17.524 9.291 9.291 0 0 0 9.032 19c6.038 0 9.34-5 9.34-9.337 0-.143-.004-.285-.01-.425A6.672 6.672 0 0 0 20 7.538z'  fill-rule='evenodd'/%3E%3C/svg%3E")!important;
  //   .result {
  //     background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='%23676767' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 7.539a6.56 6.56 0 0 1-1.885.517 3.294 3.294 0 0 0 1.443-1.816 6.575 6.575 0 0 1-2.085.796 3.283 3.283 0 0 0-5.593 2.994A9.32 9.32 0 0 1 5.114 6.6a3.28 3.28 0 0 0 1.016 4.382 3.274 3.274 0 0 1-1.487-.41v.041a3.285 3.285 0 0 0 2.633 3.218 3.305 3.305 0 0 1-1.482.056 3.286 3.286 0 0 0 3.066 2.28A6.585 6.585 0 0 1 4 17.524 9.291 9.291 0 0 0 9.032 19c6.038 0 9.34-5 9.34-9.337 0-.143-.004-.285-.01-.425A6.672 6.672 0 0 0 20 7.538z'  fill-rule='evenodd'/%3E%3C/svg%3E")!important;
  //     // @media $desktop
  //     //   &:hover
  //     //     opacity 1
  //     //     background-image url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='%23fff' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 7.539a6.56 6.56 0 0 1-1.885.517 3.294 3.294 0 0 0 1.443-1.816 6.575 6.575 0 0 1-2.085.796 3.283 3.283 0 0 0-5.593 2.994A9.32 9.32 0 0 1 5.114 6.6a3.28 3.28 0 0 0 1.016 4.382 3.274 3.274 0 0 1-1.487-.41v.041a3.285 3.285 0 0 0 2.633 3.218 3.305 3.305 0 0 1-1.482.056 3.286 3.286 0 0 0 3.066 2.28A6.585 6.585 0 0 1 4 17.524 9.291 9.291 0 0 0 9.032 19c6.038 0 9.34-5 9.34-9.337 0-.143-.004-.285-.01-.425A6.672 6.672 0 0 0 20 7.538z'  fill-rule='evenodd'/%3E%3C/svg%3E")!important
  //   }
  // }
</style>