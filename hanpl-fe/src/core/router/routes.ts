import type { RouteRecordRaw } from "vue-router";

import { ROUTE_NAMES } from "./route-names";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("@/layouts/DefaultLayout.vue"), // 레이아웃
    redirect: { name: "home" },
    children: [
      {
        path: "guide",
        name: ROUTE_NAMES.GUIDE,
        component: () => import("@/pages/TestPage.vue"),
      },
      {
        path: "home",
        name: ROUTE_NAMES.HOME,
        component: () => import("@/pages/HomePage.vue"),
      },
      {
        path: "products",
        name: ROUTE_NAMES.PRODUCT_LIST,
        component: () => import("@/pages/ProductListPage.vue"),
      },
      {
        path: "products/:id",
        name: ROUTE_NAMES.PRODUCT_DETAIL,
        component: () => import("@/pages/ProductDetailPage.vue"),
      },
    ],
  },
];
