import { supabase } from "~/lib/subase";

export async function addProduct(
  addedFile: any,
  pendingProduct: any,
  setPendingProduct: any
) {
  // e.preventDefault();
  console.log(addedFile);
  const { data, error } = await supabase
    .from("products")
    .insert(pendingProduct)
    .select();
  if (error) {
    console.log(error);
  } else {
    console.log(data);
    setPendingProduct([]);
  }
}
