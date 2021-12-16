export default [
    // {
    //     path: "",
    //     component: () =>
    //         import ("@/views/brand/register/Register.vue"),
    // },

    {
        path: "number-registration",
        component: () =>
            import ("@/views/brand/register/NumberRegistration.vue"),
    },
    {
        path: "email",
        component: () =>
            import ("@/views/brand/register/Email.vue"),
    },
    {
        path: "verification",
        component: () =>
            import ("@/views/brand/register/Verification.vue"),
    },
    {
        path: "business",
        component: () =>
            import ("@/views/brand/register/Business.vue"),
    },
    {
        path: "business-detail",
        component: () =>
            import ("@/views/brand/register/BusinessDetail.vue"),
    },
    {
        path: "contact",
        component: () =>
            import ("@/views/brand/register/Contact.vue"),
    },
];