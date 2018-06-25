<template>
  <div>
    <div :class="$style.grid">
      <product-list-item
      v-for="product in products"
      :key="product.id"
      :product="product" />
    </div>

    <div :class="$style.loadmore">
      <button :class="$style.button">Load more</button>
    </div>
  </div>
</template>

<script>
import ProductListItem from './ProductListItem'
import { mapGetters, mapActions } from 'vuex'
export default {
  components: {
    ProductListItem
  },
  computed: {
    ...mapGetters({
      products: 'product/products'
    })
  },
  methods: {
    ...mapActions({
      'fetchProducts': 'product/fetchProducts'
    })
  },
  created () {
    try {
      this.fetchProducts()
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<style lang="stylus" module>
  .grid {
    display grid
    grid-template-columns 1fr 1fr
    grid-column-gap 1rem
  }

  .loadmore {
    text-align center
    padding 20px 0
  }

  .button
    background $color-primary
    border none
    outline none
    color #ffffff
    padding 10px 20px
    border-radius 4px
    cursor pointer
</style>
