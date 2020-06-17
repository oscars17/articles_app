import Vue from 'vue'
import App from './App.vue'
import router from './router/router';
import store from './store/index.js';

Vue.config.productionTip = false

import { mapState } from 'vuex';

new Vue({
    router,
    store,
    render: h => h(App),
    beforeCreate() {
        const userStorage = localStorage.getItem('user_list');
        if (!userStorage) return localStorage.setItem('user_list', JSON.stringify([]));
        const authUser = localStorage.getItem('auth_user');
        if (authUser) {
            store.commit('setLoggedStatus', true);
        }
        store.commit('setPageLoading', false);
    },
    computed: {
        ...mapState({
            isLogged: state => state.isLogged,
        })
    }
}).$mount('#app');
