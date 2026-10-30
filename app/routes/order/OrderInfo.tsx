import converter from "number-to-words";
import { data } from "react-router";
import Price from "~/components/Price";
import type { productType } from "~/types/productType";

type propT = {
  data: productType;
};

export default function OrderInfo({ data }: propT) {
  return (
    <div className="rounded-2xl border border-gray-200 shadow  w-125 h-155 ml-10">
      <div className="flex  h-full flex-col justify-between">
        <div>
          <h3 className="text-2xl p-6 font-bold border-b border-b-soft">
            Order Summary (1 items)
          </h3>
          <div
            key={data.id}
            className="p-6 mb-2 flex justify-between items-center border-b border-soft"
          >
            <div className="flex items-center">
              <img
                src={data.files[0]}
                className="size-20 object-cover"
                alt=""
              />
              <div className="ml-3">
                <h4>{data.name}</h4>
                <h4>Quantity: 1</h4>
              </div>
            </div>
            <h3>
              <Price productPrice={data.price} />
            </h3>
          </div>
        </div>
        <div>
          <p className="uppercase font-bold">{converter.toWords(data.price)}</p>
          <div className="flex justify-between p-6 border-t border-soft">
            <h4>Total: </h4>
            <h4 className="font-bold text-2xl">
              <Price productPrice={data.price} />
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
