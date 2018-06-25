import mutationTypes from './mutationTypes'
export default {
  [mutationTypes.ADD_PRODUCTS] (state, products) {
    state.products = products
  }
}
