import Vue from 'vue'
import App from './App.vue'
import router from './router/router';
import store from './store/index.js';

Vue.config.productionTip = false

let userStorage = localStorage.getItem('user_list');
if (!userStorage) localStorage.setItem('user_list', JSON.stringify([]));
userStorage = JSON.parse(userStorage);
let authUser = localStorage.getItem('auth_data');
if (authUser) {
    authUser = JSON.parse(authUser);
    const validatedUser = userStorage.filter(x => x.password === authUser.password &&
                                                  x.email === authUser.email)[0];
    validatedUser ? store.commit('setLoggedStatus', true) :
                    localStorage.removeItem('auth_data');
}
store.commit('setPageLoading', false);

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
