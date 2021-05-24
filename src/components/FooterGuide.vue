<template>
  <div class="footer">
    <div
      class="item"
      :class="{ on: $route.path === '/msite' }"
      @click="goto('/msite')"
    >
      <div class="icon">
        <i class="iconfont icon-waimai"></i>
      </div>
      <div class="text">首页</div>
    </div>
    <div
      class="item"
      :class="{ on: $route.path === '/search' }"
      @click="goto('/search')"
    >
      <div class="icon">
        <i class="iconfont icon-sousuo"></i>
      </div>
      <div class="text">搜索</div>
    </div>
    <div
      class="item"
      :class="{ on: $route.path === '/order' }"
      @click="goto('/order')"
    >
      <div class="icon">
        <i class="iconfont icon-dingdan"></i>
      </div>
      <div class="text">订单</div>
    </div>
    <div
      class="item"
      :class="{ on: $route.path === '/profile' }"
      @click="goto('/profile')"
    >
      <div class="icon">
        <i class="iconfont icon-geren"></i>
      </div>
      <div class="text">个人</div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  methods: {
    goto(path) {
      this.$router.replace(path);
    },
  },
};
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../assets/stylus/mixins.styl'

 .footer 
    top-border-1px(#cccc)
    display flex
    position: fixed
    bottom: 0
    height: 49px
    width 100%
    text-align center
    .item
      margin-top 3px
      flex 1
      &.on
        color $green
      .iconfont
        font-size 25px
</style>