<template>
  <div>
    <div :class="$style.grid">
      <p v-if="isShowLoading">Loading...</p>
      <product-list-item
      v-for="product in products"
      :key="product.id"
      :product="product" />
    </div>
  </div>
</template>

<script>
import ProductListItem from './ProductListItem'
import { mapGetters } from 'vuex'
export default {
  components: {
    ProductListItem
  },
  data () {
    return {
      isShowLoading: true
    }
  },
  computed: {
    ...mapGetters({
      products: 'product/products'
    })
  },
  methods: {
    async fetchProducts () {
      try {
       await this.$store.dispatch('product/fetchProducts')
       this.isShowLoading = false
      } catch (error) {
        console.log(error)
      }
    }
  },
  created () {
    this.fetchProducts()
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
