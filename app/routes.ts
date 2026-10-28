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
    route("/checkoutsuccess", "routes/Checkoutsuccess.tsx"),
    route("/api/payment", "api/payment.ts"),
    route("/api/gadgets", "api/gadgets.ts"),
    route("/api/drafts", "api/drafts.ts"),
    route("/api/imagekit", "api/upload-auth.ts"),
    route("/api/dashboard", "api/dashboard.ts"),
    route("/api/checkoutsuccess", "api/success.ts"),
  ]),
  route("admin", "routes/admin/Admin.tsx"),
  route("login", "routes/login/Login.tsx"),
  route("signup", "routes/signup/Signup.tsx"),
] satisfies RouteConfig;
