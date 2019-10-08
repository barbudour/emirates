<template>
  <div id="app">
    <headBlock/>
    <router-view/>
  </div>
</template>

<script>
import headBlock from '@/components/headBlock.vue';
import { on_load_mixin } from "./system/statistics";
export default {
  mixins: [on_load_mixin],
  components: {
    headBlock
  }
};
</script>

<style lang="scss">
@import '@/assets/styles/_responsive.scss';

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  font-family: "Helvetica Neue", "Arial";
  overflow-x: hidden;
}

.container {
  width: 100%;
  max-width: vw(880);

  @include mobile {
    max-width: vm(560);
  }
}

blockquote {
  font-size: vw(30);
  color: rgb(51, 51, 51);
  font-weight: bold;
  font-style: italic;
  line-height: 1.333;
  // display: inline;
  margin: vw(40) 0 vw(34);

  @include mobile {
    font-size: vm(40);
    line-height: 1.25;
    margin: vm(100) 0 vm(90);
  }

  &.quote {
    &__left {
      max-width: vw(470);
      float: left;
      margin: vw(40) vw(40) vw(34) vw(-80);
      // display: inline;

      @include mobile {
        max-width: initial;
        margin: inherit;
      }
    }
    &__right {
      max-width: vw(470);
      float: right;
      margin: vw(40) vw(-80) vw(34) vw(40);
      // display: inline;

      @include mobile {
        max-width: initial;
        margin: inherit;
      }
    }
  }
}
</style>
  