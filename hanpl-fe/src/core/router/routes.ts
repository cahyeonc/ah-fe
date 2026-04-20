import type { RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("@/layouts/DefaultLayout.vue"), // 레이아웃
    redirect: { name: "home" },
    children: [
      {
        path: "/guide",
        name: "guide",
        component: () => import("@/pages/TestPage.vue"),
      },
      {
        path: "/home",
        name: "home",
        component: () => import("@/pages/HomePage.vue"),
      },
      {
        path: "products",
        name: "product-list",
        component: () => import("@/pages/ProductListPage.vue"),
      },
      {
        path: "products/:id",
        name: "product-detail",
        component: () => import("@/pages/ProductDetailPage.vue"),
      },
    ],
  },
];
