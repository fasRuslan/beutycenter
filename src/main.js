import Vue from 'vue';
import App from './App.vue';
import {
  BootstrapVue
} from 'bootstrap-vue'

Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import VueAgile from 'vue-agile'

Vue.use(VueAgile)

import Multiselect from 'vue-multiselect'

Vue.component('multiselect', Multiselect)

import 'vue-multiselect/dist/vue-multiselect.min.css';

import VueMask from 'v-mask'

Vue.use(VueMask);

import PerfectScrollbar from 'vue2-perfect-scrollbar'
import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css'

Vue.use(PerfectScrollbar)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')