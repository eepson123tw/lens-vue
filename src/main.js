import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
import VueAxios from 'vue-axios'

import {

  Field,
  Form,
  ErrorMessage,
  defineRule
} from 'vee-validate'

import { required, email, min } from '@vee-validate/rules'
defineRule('required', required)
defineRule('email', email)
defineRule('min', min)

const app = createApp(App).use(store).use(router, VueAxios, axios)
app.component('Form', Form)
app.component('ErrorMessage', ErrorMessage)
app.component('Field', Field)

app.mount('#app')
