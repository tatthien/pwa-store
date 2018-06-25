import api from '@/api'
import mutationTypes from './mutationTypes'

export default {
  fetchProducts ({ commit }) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await api.fetchProducts()
        commit(mutationTypes.ADD_PRODUCTS, response.data)
        resolve(response)
      } catch (error) {
        reject(error)
      }
    })
  }
}
