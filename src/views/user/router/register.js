export default [
    {
        path: "",
        component: () => import(/* webpackChunkName: "register" */"@/views/user/register/Register.vue"),
    },
    {
        path: "welcome",
        component: () => import(/* webpackChunkName: "welcome" */"@/views/user/register/Welcome.vue"),
    },
    {
        path: "profile",
        component: () => import(/* webpackChunkName: "profile" */"@/views/user/register/Profile.vue"),
    },
    {
        path: "profile-photo",
        component: () => import(/* webpackChunkName: "profilePhoto" */"@/views/user/register/ProfilePhoto.vue"),
    },
    {
        path: "connect-social",
        component: () => import(/* webpackChunkName: "connectSocial" */"@/views/user/register/ConnectSocial.vue"),
    },
    // {
    //   path: "payment-details",
    //   component: () => import("@/views/user/register/PaymentDetails.vue"),
    // },
    {
        path: "password",
        component: () => import(/* webpackChunkName: "password" */"@/views/user/register/Password.vue"),
    },
    {
        path: "story-price",
        component: () => import(/* webpackChunkName: "storyPrice" */"@/views/user/register/StoryPrice.vue"),
    },
];
