export default [
    {
        path: "",
        component: () => import(/* webpackChunkName: "register.chunk" */"@/views/brand/register/Register.vue"),
    },
    {
        path: "number-registration",
        component: () =>
            import (/* webpackChunkName: "numberRegistration.chunk" */"@/views/brand/register/NumberRegistration.vue"),
    },
    {
        path: "email",
        component: () =>
            import (/* webpackChunkName: "email.chunk" */"@/views/brand/register/Email.vue"),
    },
    {
        path: "verification",
        component: () =>
            import (/* webpackChunkName: "verification.chunk" */"@/views/brand/register/Verification.vue"),
    },
    {
        path: "business",
        component: () =>
            import (/* webpackChunkName: "business.chunk" */"@/views/brand/register/Business.vue"),
    },
    {
        path: "business-detail",
        component: () =>
            import (/* webpackChunkName: "businessDetail.chunk" */"@/views/brand/register/BusinessDetail.vue"),
    },
    {
        path: "contact",
        component: () =>
            import (/* webpackChunkName: "contact.chunk" */"@/views/brand/register/Contact.vue"),
    },
];