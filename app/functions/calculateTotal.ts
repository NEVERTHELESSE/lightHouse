type productsType = {
  price: number;
  quantity?: number;
};

export const calculateTotal = (products: productsType[]) => {
  return products.reduce(
    (total: number, product: any) => total + product.price,
    0
  );
};
