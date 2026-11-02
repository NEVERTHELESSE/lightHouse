import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import Request from "~/components/Request";

export default function MainLayout() {
  return (
    <>
      <Header />

      <Outlet />
      <Request />
      <Footer />
    </>
  );
}
