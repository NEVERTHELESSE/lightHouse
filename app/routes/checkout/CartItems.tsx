import converter from "number-to-words";
import { calculateTotal } from "~/functions/calculateTotal";
import userCounterStore from "~/stores/userCart";

export default function CartItems() {
  const products = userCounterStore((state: any) => state.products);
  const totalAmount = calculateTotal(products);
  return (
    <div className="rounded-2xl border border-gray-200 shadow  w-125 h-155 ml-10">
      <div className="flex  h-full flex-col justify-between">
        <div>
          <h3 className="text-2xl p-6 font-bold border-b border-b-soft">
            Order Summary (4 items)
          </h3>
          {products.map((product) => (
            <div
              key={product.id}
              className="p-6 mb-2 flex justify-between items-center border-b border-soft"
            >
              <div className="flex items-center">
                <img
                  src={product.src}
                  className="size-20 object-cover"
                  alt=""
                />
                <div className="ml-3">
                  <h4>{product.title}</h4>
                  <h4>Quantity: 1</h4>
                </div>
              </div>
              <h3>₦ {product.price.toLocaleString()}</h3>
            </div>
          ))}
        </div>
        <div>
          <p className="uppercase font-bold">
            {converter.toWords(totalAmount)}
          </p>
          <div className="flex justify-between p-6 border-t border-soft">
            <h4>Total: </h4>
            <h4 className="font-bold text-2xl">
              ₦ {totalAmount.toLocaleString()}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
