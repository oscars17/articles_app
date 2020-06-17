import Vue from 'vue';
import Vuex from 'vuex';
import state from "@/store/state";
import mutations from "@/store/mutations";
import index from "@/store/article-list";
Vue.use(Vuex);

const store = new Vuex.Store({
    state: state,
    mutations: mutations,
    modules: {
        articleStore: index,
    }
})

export default store;
