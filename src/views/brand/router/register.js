export default [{
        path: "",
        component: () =>
            import ("@/views/brand/register/Register.vue"),
    },

    {
        path: "number-registration",
        component: () =>
            import ("@/views/brand/register/NumberRegistration.vue"),
    },
];