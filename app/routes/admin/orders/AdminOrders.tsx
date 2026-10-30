import Price from "~/components/Price";
import AdminProductSelection from "../AdminProductSelection";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { api } from "~/api/api";
import type { orderType } from "~/types/orderType";
import { calculateTotal } from "~/functions/calculateTotal";
import { formatNumber } from "~/functions/formatNumber";
import { date } from "~/functions/Day";

export default function AdminOrders() {
  const [active, setActive] = useState("all orders");
  const options = ["all orders", "ongoing order", "pending order", "delivered"];
  const { data, isPending, error } = useQuery({
    queryKey: ["allorder"],
    queryFn: async () => {
      const result = await api.get("allorder");
      console.log(result);
      return result.data.message;
    },
  });
  return (
    <div className="w-full">
      <AdminProductSelection
        active={active}
        setActive={setActive}
        options={options}
      />
      {error ? (
        "the was an error while loading order details"
      ) : (
        <>
          {isPending ? (
            "loaing"
          ) : (
            <>
              {data.map((orders: orderType) => (
                <div key={orders.id} className="flex my-2 w-full">
                  <div className="bg-white shadow hover:bg-soft duration-150 cursor-pointer w-full flex justify-between rounded-2xl p-2 items-center">
                    <div className="flex">
                      <div className="flex pl-4">
                        {orders.orderInfo
                          .slice(0, 2)
                          .map(({ src }, index: number) => (
                            <img
                              key={index}
                              src={src}
                              alt="image"
                              title={`Dell Latitude E5250 \s`}
                              className="size-20  bg-primary -ml-4 border-2 border-white rounded-2xl object-cover"
                            />
                          ))}
                      </div>
                      <div className="mx-3">
                        <p>{orders.orderInfo.length} Items</p>
                        <p>{date(orders.created_at)}</p>
                        <Price
                          productPrice={calculateTotal(orders.orderInfo)}
                        />
                      </div>
                      <div className="ml-6">
                        <p>{orders.userInfo.fullName}</p>
                        <p>{orders.userInfo.email}</p>
                        <p>{formatNumber(orders.userInfo.phoneNumber)}</p>
                      </div>
                    </div>
                    <div className="flex justify-center items-center px-4">
                      <div className="size-4 mr-2 bg-success rounded-full"></div>
                      <p>Delivered</p>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </>
      )}
    </div>
  );
}
