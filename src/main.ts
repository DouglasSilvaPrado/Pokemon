import "bootstrap/dist/css/bootstrap.min.css"

import { createApp } from 'vue'
import App from './App.vue'
import router from './Router'
import { key, store } from './store'

createApp(App)
    .use(router)
    .use(store, key)
    .mount('#app')

import "bootstrap/dist/js/bootstrap.js"
