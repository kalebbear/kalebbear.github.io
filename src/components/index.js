import Vue from 'vue'
import Search from './Search'
import Nav from '@/views/front/components/Nav.vue'
import Footer from '@/views/front/components/Footer.vue'
import Banner from '@/views/front/components/Banner.vue'
import { returnValue } from '@/utils/index'
function piugin () {
    Vue.component('Search', Search)
    Vue.component('Nav', Nav)
    Vue.component('Footer', Footer)
    Vue.component('Banner', Banner)
    Vue.prototype.returnValue = returnValue
}

export default piugin
