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
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}
</style>
  