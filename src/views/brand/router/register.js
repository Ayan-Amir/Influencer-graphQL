export default [{
        path: "",
        component: () =>
            import ("@/views/brand/register/Register.vue"),
    },
    {
        path: "welcome",
        component: () =>
            import ("@/views/brand/register/Welcome.vue"),
    },
    {
        path: "number-registration",
        component: () =>
            import ("@/views/brand/register/NumberRegistration.vue"),
    },
    {
        path: "profile-photo",
        component: () =>
            import ("@/views/brand/register/ProfilePhoto.vue"),
    },
    {
        path: "connect-social",
        component: () =>
            import ("@/views/brand/register/ConnectSocial.vue"),
    },
    // {
    //   path: "payment-details",
    //   component: () => import("@/views/user/register/PaymentDetails.vue"),
    // },
    {
        path: "password",
        component: () =>
            import ("@/views/brand/register/Password.vue"),
    },
    {
        path: "story-price",
        component: () =>
            import ("@/views/brand/register/StoryPrice.vue"),
    },
];