<template>
  <div :class="layoutStyles.primary_content">
    <h1 :class="layoutStyles.page_title">About</h1>
    <p>
      This is a PWA store that combines Vue.js + WooCommerce.
    </p>
    <br>
    <p>© 2018 - <a href="https://tatthien.com">Thien Nguyen</a></p>
  </div>
</template>

<script>
import layoutStyles from '@/styles/modules/layout.module.styl'
export default {
  data () {
    return {
      layoutStyles
    }
  }
}
</script>

