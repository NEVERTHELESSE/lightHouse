type priceT = {
  productPrice: number;
};

export default function Price({ productPrice }: priceT) {
  return <p>₦ {productPrice.toLocaleString()}</p>;
}
