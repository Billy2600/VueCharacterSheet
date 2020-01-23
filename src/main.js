/*jslint es6 */
import Vue from 'vue';
import App from './App.vue';

var VueCookie = require('vue-cookie');
Vue.use(VueCookie);

new Vue({
    render: h => h(App)
}).$mount('#app')