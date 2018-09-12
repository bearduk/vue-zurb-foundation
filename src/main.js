// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'

window.$ = require('jquery')
window.JQuery = require('jquery')



import sassStyles from './assets/sass/app.scss';

Vue.config.productionTip = false

// list Vue comoonents
// Vue.component('kitest', require('./components/Ki-test.vue'));
import kitest from './components/Ki-test.vue';



/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { kitest }
})

// loading in Foundation now that Vue has booted
import './../node_modules/foundation-sites/dist/css/foundation.min.css';
import './../node_modules/foundation-sites/dist/js/foundation.min.js';
window.$(document).foundation();