import {
  type RouteConfig,
  index,
  route,
  layout,
} from "@react-router/dev/routes";

export default [
  layout("layouts/MainLayout.tsx", [
    index("routes/home/Home.tsx"),
    route("/product", "routes/product/Product.tsx"),
    route("/products", "routes/products/Products.tsx"),
    route("/checkout", "routes/checkout/CheckOut.tsx"),
    route("/api/payment", "api/payment.ts"),
  ]),
  route("admin", "routes/admin/Admin.tsx"),
  route("login", "routes/login/Login.tsx"),
] satisfies RouteConfig;
