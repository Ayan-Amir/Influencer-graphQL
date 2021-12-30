import Vue from "vue";
import VueRouter from "vue-router";
import loginOrRegister from "@/layouts/LoginOrRegister.vue";
import dashboardLayout from "@/layouts/DashboardLayout.vue";
import user from "@/views/user/router";
import brand from "@/views/brand/router";
import userRegister from "@/views/user/router/register";
import brandRegister from "@/views/brand/router/register";
import store from '../store'
// import {MESSAGE} from '@/_helpers/alertMessages';
Vue.use(VueRouter);

const routes = [{
        path: "/login",
        component: () =>
            import (/* webpackChunkName: "login.chunk" */"@/views/common/Login.vue"),
    },
    {
        path: "/user",
        component: dashboardLayout,
        children: [...user],
    },
    {
        path: "/user/login",
        component: loginOrRegister,
        children: [{
            path: "",
            component: () =>
                import (/* webpackChunkName: "userLogin.chunk" */"@/views/user/Login.vue"),
        }, ],
    },
    {
        path: "/user/register",
        component: loginOrRegister,
        children: [
            ...userRegister
        ],
    },
    {
        path: "/brand",
        component: dashboardLayout,
        children: [...brand],
    },
    {
        path: "/brand/login",
        component: loginOrRegister,
        children: [{
            path: "",
            component: () =>
                import (/* webpackChunkName: "brandLogin.chunk" */"@/views/brand/Login.vue"),
        }, ],
    },
    {
        path: "/brand/register",
        component: loginOrRegister,
        children: [
            ...brandRegister
        ],
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

router.beforeEach((to, from, next) => {
    // Check if the user is logged in

    const isLoggedIn = store.getters.isAuthenticated
        //console.log(isLoggedIn);
    let userType = 0;
    // console.log(store.getters.user);
    // if(store.getters.user){
    //     userType = store.getters.user.type;
    // }
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!isLoggedIn) {
            store.dispatch('logOut')

            next({
                path: 'user/login',
                query: { redirect: to.fullPath }
            })
            store.dispatch('alert/error', "Please login to continue.")
        } else if (!userType == to.meta.userType) {
            store.dispatch('logOut')
            store.dispatch('alert/error', "You aren't authorized for this request.")
            next({
                path: '/login',
                query: { redirect: to.fullPath }
            })
        } else {
            next()
        }
    } else {
        next()
    }
})



export default router;