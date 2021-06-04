import axios from 'axios'

const login = axios.create({
  baseURL: 'https://vue3-course-api.hexschool.io/'
})

export const postLoginUser = val => login.post('/admin/signin', val)
