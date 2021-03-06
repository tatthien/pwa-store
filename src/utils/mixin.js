import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      $_settings: 'setting/settings'
    })
  },
  filters: {
    formatPrice (value, currency, position = 'left', decimal = 2) {
      if (value === '') return ''
      value = Math.abs(value)
      value = value.toFixed(decimal)
      if (position === 'left') {
        value = currency + value
      } else {
        value = value + currency
      }
      return value
    }
  }
}
