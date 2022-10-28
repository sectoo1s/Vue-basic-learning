import Vue from "vue";
import VueRouter from "vue-router";


import Home from "../views/Home.vue";
import List from "../views/List.vue";
import Cart from "../views/Cart.vue";
import My from "../views/My.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/list",
    name: "List",
    component: List,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/my",
    name: "My",
    component: My,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
