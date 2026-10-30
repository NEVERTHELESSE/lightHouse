type priceT = {
  productPrice: number;
};

export default function Price({ productPrice }: priceT) {
  return <strong>₦ {productPrice.toLocaleString()}</strong>;
}
