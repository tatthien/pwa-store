<template>
  <div :class="$style.header">
    <div :class="$style.header_top">
      <a href="#" :class="$style.logo">
        <span :class="$style.txtpwa">pwa</span>
        <span :class="$style.txtstore">lab.inbusiness.no</span>
      </a>
      <nav>
        <a href="#" :class="$style.icon">
          <font-awesome icon="bell" />
        </a>
        <a href="#" :class="$style.icon">
          <font-awesome icon="shopping-cart" />
        </a>
      </nav>
    </div>
    <div :class="$style.search_box">
      <input type="text" placeholder="Search products">
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="stylus" module>
  .header
    background-color $color-primary
    padding 10px 10px
    position fixed
    top 0
    left 0
    right 0

  .header_top
    display flex
    justify-content space-between
    align-items center

  .logo
    color #fff
    text-decoration none
    font-size 1rem
    font-weight $font-bold

  .txtpwa
    text-transform uppercase
    background-color #fff
    border-radius 3px
    color $color-primary
    padding 0 10px
    margin-right 5px

  .txtstore
    text-transform capitalize

  .search_box
    margin-top 10px
    display flex
    input
      width 100%
      border none
      padding 8px 10px
      border-radius 4px
      box-shadow 0 2px 3px rgba(0,0,0,.15)
      font-weight $font-normal
      transition all .15s ease-in-out
      &:focus
        box-shadow 0px 2px 7px rgba(0,0,0,.3)

  .icon
    color #fff
    font-size 1.2rem
    margin-left 10px
</style>
