import { supabase } from "~/lib/subase";
import type { Route } from "../+types/Admin";

export async function loader() {
  const { data, error } = await supabase.from("drafts").select("*");
  // .limit(20);

  if (error) {
    throw new Response("Failed to load products", {
      status: 500,
    });
  }

  return { products: data ?? [] };
}

export default function Draft({ loaderData }: Route.ComponentProps) {
  console.log(loaderData);
  return (
    <div>
      <p>
        product in draft will be deleted in 30 day, settings can be change in
        setting page{" "}
      </p>
      <>
        {/* {loaderData.products.map((product) => (
        <div key={product.id}>
          {product.title} - {product.price}
        </div>
      ))} */}
      </>
    </div>
  );
}
