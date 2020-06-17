import VueRouter from 'vue-router';
import Vue from 'vue';
import EnterScreen from "@/views/EnterScreen";
import SignIn from "@/views/SignIn";
import SignUp from "@/views/SignUp";
import Main from "@/views/Main";

import store from "@/store";
import MainArticleDetails from "@/components/Main/MainArticleDetails";

Vue.use(VueRouter);


const routes = [
    {
        path: '/',
        name: 'enter-screen',
        component: EnterScreen,
        meta: {
            pageHeader: 'Ready for a great User experience?'
        }
    },
    {
        path: '/sign-in',
        name: 'sign-in',
        component: SignIn,
        meta: {
            pageHeader: 'Sign In'
        }
    },
    {
        path: '/sign-up',
        name: 'sign-up',
        component: SignUp,
        meta: {
            pageHeader: 'Sign Up'
        }
    },
    {
        path: '/articles',
        name: 'article-list',
        component: Main,
        meta: {
            pageHeader: 'Articles',
            requiresAuth: true,
        },
        children: [
            {
                path: '/articles/:id',
                name: 'article-details',
                components: {
                    'article-details': MainArticleDetails
                },
                meta: {
                    pageHeader: 'Details',
                    requiresAuth: true,
                }
            }
        ]
    },
]

const router = new VueRouter({
    routes,
    mode: 'history',
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!store.state.isLogged) {
            next({ name: 'enter-screen' });
        } else {
            next();
        }
    }
    else {
        if (store.state.isLogged) {
            next({name: 'article-list'});
        }
        else{
            next();
        }
    }
})

export default router;
