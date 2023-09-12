import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    redirect: "/table/v-table",
  },
  {
    path: "/table",
    name: "table",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "table" */ "../views/home/home.vue"),
    redirect: "/table/v-table",
    children: [
      {
        path: "v-table",
        name: "v-table",
        component: () =>
          import(/* webpackChunkName: "table" */ "../views/table"),
      },
      {
        path: "virtualTable",
        name: "virtualTable",
        component: () =>
          import(
            /* webpackChunkName: "table" */ "../views/table/virtualTable.vue"
          ),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
