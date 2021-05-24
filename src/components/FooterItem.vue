<template>
  <div class="footer-item">
    <slot name="icon" class="iconfont" :class="'icon' + className"></slot>
    <slot name="text">{{text}}<slot>
  </div>
</template>
<script>
export default {
  props: ["className", "text"],
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
.footer-item {
  flex: 1;
}
</style>