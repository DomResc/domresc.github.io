const routes = [
  {
    path: "/",
    component: () => import("layouts/Main.vue"),
    children: [
      { path: "/", component: () => import("pages/Home.vue") },
      { path: "/blog", component: () => import("pages/Blog.vue") },
      { path: "/portfolio", component: () => import("pages/Portfolio.vue") }
    ]
  }
];

// Always leave this as last one
if (process.env.MODE !== "ssr") {
  routes.push({
    path: "*",
    component: () => import("pages/Error404.vue")
  });
}

export default routes;
