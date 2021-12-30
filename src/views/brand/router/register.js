export default [
  {
    path: "",
    component: () =>
      import(
        /* webpackChunkName: "register" */ "@/views/brand/register/Register.vue"
      ),
  },
  {
    path: "number-registration",
    component: () =>
      import(
        /* webpackChunkName: "numberRegistration" */ "@/views/brand/register/NumberRegistration.vue"
      ),
  },
  {
    path: "email",
    component: () =>
      import(
        /* webpackChunkName: "email" */ "@/views/brand/register/Email.vue"
      ),
  },
  {
    path: "verification",
    component: () =>
      import(
        /* webpackChunkName: "verification" */ "@/views/brand/register/Verification.vue"
      ),
  },
  {
    path: "business",
    component: () =>
      import(
        /* webpackChunkName: "business" */ "@/views/brand/register/Business.vue"
      ),
  },
  {
    path: "business-detail",
    component: () =>
      import(
        /* webpackChunkName: "businessDetail" */ "@/views/brand/register/BusinessDetail.vue"
      ),
  },
  {
    path: "contact",
    component: () =>
      import(
        /* webpackChunkName: "contact" */ "@/views/brand/register/Contact.vue"
      ),
  },
];
