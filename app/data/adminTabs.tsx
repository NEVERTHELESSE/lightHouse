import { Suspense, lazy } from "react";

const AdminProducts = lazy(
  () => import("../routes/admin/products/AdminProducts")
);
const AdminDashboard = lazy(
  () => import("../routes/admin/dashboard/AdminDashboard")
);
const AdminOrder = lazy(() => import("../routes/admin/orders/AdminOrders"));
const AdminUser = lazy(() => import("../routes/admin/AdminUser"));
const AdminAllProduct = lazy(
  () => import("../routes/admin/adminAllProduct/AdminAllProduct")
);
const Draft = lazy(() => import("../routes/admin/draft/Draft"));
export const tabs = [
  {
    id: "1",
    component: (
      <Suspense fallback="loading">
        <AdminDashboard />
      </Suspense>
    ),
    title: "dashboard",
    to: "#dashboard",
  },
  {
    id: "2",
    component: (
      <Suspense fallback="loading">
        <AdminProducts />
      </Suspense>
    ),
    title: "add products",
    to: "#addProduct",
  },
  {
    id: "3",
    component: (
      <Suspense fallback="loading">
        <AdminOrder />
      </Suspense>
    ),
    title: "orders",
    to: "#orders",
  },
  {
    id: "4",
    component: (
      <Suspense fallback="loading">
        <AdminUser />
      </Suspense>
    ),
    title: "users",
    to: "#users",
  },
  {
    id: "5",
    component: (
      <Suspense fallback="loading">
        <AdminAllProduct />
      </Suspense>
    ),
    title: "all products",
    to: "#allProduct",
  },
  {
    id: "5",
    component: (
      <Suspense fallback="loading">
        <Draft />
      </Suspense>
    ),
    title: "draft",
    to: "#draft",
  },
];
