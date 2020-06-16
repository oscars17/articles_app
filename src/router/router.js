import VueRouter from 'vue-router';
import Vue from 'vue';
import EnterScreen from "@/views/EnterScreen";
import SignIn from "@/views/SignIn";
import SignUp from "@/views/SignUp";

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
    }
]

const router = new VueRouter({
    routes,
    mode: 'history',
})

export default router;