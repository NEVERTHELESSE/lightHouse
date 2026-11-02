import Price from "./Price";

type propT = {
  discount: number;
};

export function Discount({ discount }: propT) {
  return (
    <s className="text-gray-500">
      <i>{<Price productPrice={discount} />}</i>
    </s>
  );
}
