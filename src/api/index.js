import axios from 'axios'
const consumerKey = process.env.VUE_APP_CONSUMER_KEY
const consumerSecretKey = process.env.VUE_APP_CONSUMER_SECRET_KEY
const http = axios.create({
  baseURL: '/api',
  auth: {
    username: consumerKey,
    password: consumerSecretKey
  }
})

export default {
  fetchProducts (params = {}) {
    return http.get('/products', {
      params: params
    })
  }
}
