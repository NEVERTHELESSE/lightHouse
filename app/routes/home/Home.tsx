import { Suspense, lazy } from "react";
import Brand from "./Brand";
import Hero from "./Hero";
import Perfect from "./Perfect";
import Testimony from "./Testimony";

const TopPick = lazy(() => import("./TopPick"));
const Explore = lazy(() => import("./Explore"));
const NewProduct = lazy(() => import("./NewProduct"));
const NewsUpdate = lazy(() => import("./NewsUpdate"));
const SocialMedia = lazy(() => import("./SocialMedia"));
export function meta() {
  //We sell reliable Uk used and new Laptops with smart gadgets.

  return [
    {
      title: "Light House ICT GADGET MALL",
    },
    {
      name: "Sales of Mini & Notebook Laptops || Apple Laptops for Gaming/ Photo & Video Graphics Laptop | Traning | Gadget Clinic | Repair of Phone & Laptop",
      content: "Home Page",
    },
  ];
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Brand />
      <Perfect />
      <Suspense fallback="loading">
        <TopPick />
      </Suspense>
      <Suspense fallback="loading">
        <NewProduct />
      </Suspense>
      <Suspense fallback="loading">
        <Explore />
      </Suspense>
      <Testimony />
      <Suspense fallback="loading">
        <NewsUpdate />
      </Suspense>
      <Suspense fallback="loading">
        <SocialMedia />
      </Suspense>
    </main>
  );
}
