<template>
  <div :class="$style.footer">
    <nav :class="$style.tabs">
      <router-link
      to="/"
      :class="$style.tab_icon"
      :active-class="$style.tab_icon_active"
      exact>
        <i><font-awesome icon="store" /></i>
        <span>Home</span>
      </router-link>

      <router-link
      to="/account"
      :class="$style.tab_icon"
      :active-class="$style.tab_icon_active">
        <i><font-awesome icon="user-alt" /></i>
        <span>Account</span>
      </router-link>

      <router-link
      to="/settings"
      :class="$style.tab_icon"
      :active-class="$style.tab_icon_active">
        <i><font-awesome icon="cog" /></i>
        <span>Settings</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="stylus" module>
  .footer
    position fixed
    bottom 0
    left 0
    right 0
    background-color #ffffff
    padding 5px 10px
    box-shadow 0 -2px 3px rgba(0,0,0,.1)
  .tabs
    display flex
    justify-content space-around
    align-items center
  .tab_icon
    text-decoration none
    font-size .7rem
    color $color-gray
    text-align center
    padding 0 20px
    a, i
      display block
      line-height 1
    i
      font-size 1.2rem
  .tab_icon_active
    color $color-primary
</style>

