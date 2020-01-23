/*jslint es6 */
import Vue from 'vue';
import App from './App.vue';

var vue = require('vue');
var vueCookie = require('vue-cookie');
vue.use(vueCookie);

new Vue({
    render: h => h(App)
}).$mount('#app');