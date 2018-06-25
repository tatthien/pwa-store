<template>
  <div id="app">
    <the-header/>
    <keep-alive>
      <router-view/>
    </keep-alive>
    <the-footer/>
  </div>
</template>

<script>
import TheHeader from '@/components/partials/TheHeader'
import TheFooter from '@/components/partials/TheFooter'
export default {
  components: {
    TheHeader,
    TheFooter
  }
}
</script>


<style lang="stylus">
</style>
