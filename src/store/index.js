import Vue from 'vue';
import Vuex from 'vuex';
import state from "@/store/state";
import mutations from "@/store/mutations";
import articleStore from "@/store/article-list";
import signInStore from './sign-in/index'
Vue.use(Vuex);

const store = new Vuex.Store({
    state: state,
    mutations: mutations,
    modules: {
        articleStore: articleStore,
        signInStore: signInStore
    }
})

export default store;
