import axios from 'axios'

const putProduct = axios.create({
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

export const putCurrentProduct = (val, data) => putProduct.put(`/api/eepson123tw/admin/product/${val}`, data)
