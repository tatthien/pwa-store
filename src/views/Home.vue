<template>
  <div :class="layoutStyles.primary_content">
    <h1 :class="layoutStyles.page_title">All Products</h1>
    <product-list/>
  </div>
</template>

<script>
import ProductList from '@/components/products/ProductList'
import layoutStyles from '@/styles/modules/layout.module.styl'
export default {
  components: {
    ProductList
  },
  data () {
    return {
      layoutStyles
    }
  }
}
</script>

