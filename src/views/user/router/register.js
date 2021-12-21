export default [
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
        path: "connect-social",
        component: () => import("@/views/user/register/ConnectSocial.vue"),
    },
    // {
    //   path: "payment-details",
    //   component: () => import("@/views/user/register/PaymentDetails.vue"),
    // },
    {
        path: "password",
        component: () => import("@/views/user/register/Password.vue"),
    },
    {
        path: "story-price",
        component: () => import("@/views/user/register/StoryPrice.vue"),
    },
];
