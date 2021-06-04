import axios from 'axios'

const getProduct = axios.create({
  baseURL: 'https://vue3-course-api.hexschool.io'
})

const token =
    document.cookie.replace(
      new RegExp(
        '(?:(?:^|.*;)\\s*' +
            encodeURIComponent('token').replace(/[-.+*]/g, '\\$&') +
            '\\s*\\=\\s*([^;]*).*$)|^.*$'
      ),
      '$1'
    ) || null
    // console.log(token);
axios.defaults.headers.common.Authorization = token

export const getAllProduct = () => getProduct.get('/api/eepson123tw/products/all')
