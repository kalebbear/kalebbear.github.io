


import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/styles/index.less' // global css

import md5 from 'md5'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.prototype.$md5 = md5


import './permission' // permission control

import piugin from './components/index'  //导入全局组件
let userAgent = navigator.userAgent || navigator.vendor || window.opera;

if (
    /android|iphone|ipad|ipod|blackberry|iemobile|windows phone/i.test(
        userAgent.toLowerCase()
    )
) {
    if (location.href.includes('aspice') || store.state.type === 'aspice') {
        window.location = "http://www.huasaiinfo.com/mobile/#/aspice"
    } else {
        window.location = "http://www.huasaiinfo.com//mobile/"
    }

}
Vue.use(piugin)

Vue.use(ElementUI);
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
