type productsType = {
  price: number;
  quantity?: number;
};

export const calculateTotal = (products: productsType[]) => {
  return products.reduce(
    (total: number, product: any) => total + product.price,
    0,
  );
};
export const calculateTotalAmount = (products: productsType[]) => {
  return products.reduce(
    (total: number, product: any) => total + product.totalAmount,
    0,
  );
};
