import Vue from 'vue'
import App from './App.vue'
import router from './router/router';
import store from './store/index.js';

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
    beforeCreate() {
        const userStorage = localStorage.getItem('user_list');
        if (!userStorage) localStorage.setItem('user_list', JSON.stringify([]));
    }
}).$mount('#app')
