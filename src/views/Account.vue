<template>
  <div :class="layoutStyles.primary_content">
    <h1 :class="layoutStyles.page_title">Account</h1>
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
