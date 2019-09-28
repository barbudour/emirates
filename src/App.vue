<template lang="pug">
  main.main
</template>

<script>
import { on_load_mixin } from "./system/statistics";
export default {
  mixins: [on_load_mixin],
  components: {}
};
</script>

<style lang="stylus">
.main
  pos relative
</style>
  