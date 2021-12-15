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
        meta: { requiresAuth: true, userType: "0" }
    },
    {
        path: "profile-photo",
        component: () => import("@/views/user/register/ProfilePhoto.vue"),
        meta: { requiresAuth: true, userType: "0" }
    },
    {
        path: "connect-social",
        component: () => import("@/views/user/register/ConnectSocial.vue"),
        meta: { requiresAuth: true, userType: "0" }
    },
    // {
    //   path: "payment-details",
    //   component: () => import("@/views/user/register/PaymentDetails.vue"),
    // },
    {
        path: "password",
        component: () => import("@/views/user/register/Password.vue"),
        meta: { requiresAuth: true, userType: "0" }
    },
    {
        path: "story-price",
        component: () => import("@/views/user/register/StoryPrice.vue"),
        meta: { requiresAuth: true, userType: "0" }
    },
];
