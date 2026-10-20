import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import Request from "~/components/Request";
import ShowCart from "./ShowCart";

export default function MainLayout() {
  return (
    <>
      <Header />
      <ShowCart />
      <Outlet />
      <Request />
      <Footer />
    </>
  );
}
