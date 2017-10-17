import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'

import  fastclick from 'fastclick'
import './common/stylus/index.styl'
Vue.use(VueResource)
fastclick.attach(document.body)
new Vue ({
    el:'#app',
    render: h => h (App),
    router
})
