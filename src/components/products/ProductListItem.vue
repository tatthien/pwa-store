<template>
  <div :class="$style.product">
    <a href="#" :class="$style.link">
      <figure :class="$style.thumbnail">
        <img :src="image" alt="product.name">
      </figure>
      <h2 :class="$style.title">{{ product.name }}</h2>
      <div :class="$style.price_group">
        <p :class="$style.price">{{ price | formatPrice('kr')}}</p>
        <p v-if="originalPrice">
          <span :class="$style.original_price" >{{ originalPrice | formatPrice('kr') }}</span>
          <span :class="$style.discount">-{{ discount }}%</span>
        </p>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      width: ''
    }
  },
  computed: {
    image () {
      if (this.product.images.length > 0) {
        return this.product.images[0].src
      }
      return ' http://via.placeholder.com/400x400'
    },
    price () {
      if (this.product.sale_price !== '')
        return this.product.sale_price
      return this.product.regular_price
    },
    originalPrice () {
      if (this.product.sale_price !== '')
        return this.product.regular_price
      return ''
    },
    discount () {
      if (this.product.sale_price === '') return ''
      return Math.ceil((this.originalPrice - this.price) / this.price * 100)
    }
  },
  mounted () {
    this.width = this.$el.clientWidth - 10
  }
}
</script>

<style lang="stylus" module>
  .product
    background-color #ffffff
    border-radius 10px
    margin 10px 0

  .link
    display block
    text-decoration none
    color $color-gray
    display grid
    grid-template-rows auto auto auto

  .thumbnail
    img
      width 100%
      height auto

  .title
    font-size 1rem
    font-weight $font-normal
    margin-bottom 5px

  .price_group
    align-self end

  .price
    font-weight $font-bold
    font-size 1.2rem
    color red

  .original_price
    text-decoration line-through

  .discount
    background-color red
    text-decoration none
    color #ffffff
    font-size .8rem
    border-radius 3px
    padding 0 3px
    font-weight $font-bold
    margin-left 10px
</style>
