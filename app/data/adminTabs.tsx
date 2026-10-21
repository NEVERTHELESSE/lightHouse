import { Suspense, lazy } from "react";

const AdminProducts = lazy(() => import("../routes/admin/AdminProducts"));
const AdminDashboard = lazy(() => import("../routes/admin/AdminDashboard"));
const AdminOrder = lazy(() => import("../routes/admin/AdminOrder"));
const AdminUser = lazy(() => import("../routes/admin/AdminUser"));
export const tabs = [
  {
    id: "1",
    component: (
      <Suspense fallback="loading">
        <AdminDashboard />
      </Suspense>
    ),
    title: "dashboard",
  },
  {
    id: "2",
    component: (
      <Suspense fallback="loading">
        <AdminProducts />
      </Suspense>
    ),
    title: "products",
  },
  {
    id: "3",
    component: (
      <Suspense fallback="loading">
        <AdminOrder />
      </Suspense>
    ),
    title: "orders",
  },
  {
    id: "4",
    component: (
      <Suspense fallback="loading">
        <AdminUser />
      </Suspense>
    ),
    title: "users",
  },
];
