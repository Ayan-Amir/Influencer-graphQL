export default [
    {
        path: "",
        component: () => import(/* webpackChunkName: "register.chunk" */"@/views/user/register/Register.vue"),
    },
    {
        path: "welcome",
        component: () => import(/* webpackChunkName: "welcome.chunk" */"@/views/user/register/Welcome.vue"),
    },
    {
        path: "profile",
        component: () => import(/* webpackChunkName: "profile.chunk" */"@/views/user/register/Profile.vue"),
    },
    {
        path: "profile-photo",
        component: () => import(/* webpackChunkName: "profilePhoto.chunk" */"@/views/user/register/ProfilePhoto.vue"),
    },
    {
        path: "connect-social",
        component: () => import(/* webpackChunkName: "connectSocial.chunk" */"@/views/user/register/ConnectSocial.vue"),
    },
    // {
    //   path: "payment-details",
    //   component: () => import("@/views/user/register/PaymentDetails.vue"),
    // },
    {
        path: "password",
        component: () => import(/* webpackChunkName: "password.chunk" */"@/views/user/register/Password.vue"),
    },
    {
        path: "story-price",
        component: () => import(/* webpackChunkName: "storyPrice.chunk" */"@/views/user/register/StoryPrice.vue"),
    },
];
