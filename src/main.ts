import { createApp } from 'vue'
import { store } from './store'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import '@popperjs/core/dist/umd/popper.min.js'

import FontAwesomeIcon from './assets/fontawesome-icons'
import router from './router'

createApp(App)
    .component("FontAwesomeIcon", FontAwesomeIcon)
    .use(store)
    .use(router)
    .mount('#app')
