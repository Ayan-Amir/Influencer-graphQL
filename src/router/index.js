import Vue from "vue";
import VueRouter from "vue-router";
import LoginOrRegister from "@/layouts/LoginOrRegister.vue";
import DashboardLayout from "@/layouts/DashboardLayout.vue";
import user from "@/views/user/router";
import store from '../store'
// import {MESSAGE} from '@/_helpers/alertMessages';
Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    component: () => import("@/views/common/Login.vue"),
  },
  {
    path: "/user",
    component: DashboardLayout,
    children: [...user],
  },
  {
    path: "/user/login",
    component: LoginOrRegister,
    children: [
      {
        path: "",
        component: () => import("@/views/user/Login.vue"),
      },
    ],
  },
  {
    path: "/user/register",
    component: LoginOrRegister,
    children: [
      {
        path: "",
        component: () => import("@/views/user/register/Register.vue"),
      },
      {
        path: "welcome",
        component: () => import("@/views/user/register/Welcome.vue"),
      },
      {
        path: "profile",
        component: () => import("@/views/user/register/Profile.vue"),
      },
      {
        path: "profile-photo",
        component: () => import("@/views/user/register/ProfilePhoto.vue"),
      },
      {
        path: "payment-details",
        component: () => import("@/views/user/register/PaymentDetails.vue"),
      },
      {
        path: "password",
        component: () => import("@/views/user/register/Password.vue"),
      },
      {
        path: "story-price",
        component: () => import("@/views/user/register/StoryPrice.vue"),
      },
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
    if(store.getters.user){
        const userType = store.getters.user.type;
    }
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!isLoggedIn) {
            store.dispatch('logOut')
            
            next({
                path: 'user/login',
                query: { redirect: to.fullPath }
            })
            store.dispatch('alert/error', "Please login to continue.")
        }
        else if(!userType==record.meta.userType)
        {
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
