import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import $ from 'jquery';
window.$ = window.jQuery = $;
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

const app = createApp(App)

app.use(router)

app.mount('#app')


