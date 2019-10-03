<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { on_load_mixin } from "./system/statistics";
export default {
  mixins: [on_load_mixin],
  components: {}
};
</script>

<style lang="scss">
@import '@/assets/styles/_responsive.scss';

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  font-family: "Helvetica Neue", "Arial";
}

.container {
  width: 100%;
  max-width: vw(880);
}
</style>
  