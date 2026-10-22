import { useState } from "react";
import { FaX } from "react-icons/fa6";
import userCounterStore from "~/stores/userCart";
import type { showCartT } from "~/types/productType";
import ContinueShopping from "./ContinueShopping";
import { Link } from "react-router";
import { calculateTotal } from "~/functions/calculateTotal";

export default function ShowCart() {
  const hideCart = userCounterStore((state: any) => state.hideCart);
  const active = userCounterStore((state: any) => state.cart);
  const products = userCounterStore((state: any) => state.products);

  const totalAmount = calculateTotal(products);
  return (
    <>
      <section
        className="fixed flex items-end justify-end sm:p-0  w-screen duration-200 ease-in  h-screen z-100 "
        style={{
          // display: active ? "flex" : "none",
          left: active ? "0" : "100%",
        }}
      >
        <div
          className="h-full hidden sm:flex w-[70%] bg-[#38383888]"
          onClick={hideCart}
        ></div>
        <div className="h-full bg-white duration-1000 flex flex-col justify-between  w-full sm:w-[30%]">
          <div>
            <div className="flex items-center p-6 justify-between shadow">
              <div>
                <h1 className="text-2xl font-bold">Shopping Cart</h1>
                <p>
                  Items in Cart{" "}
                  <span className="font-bold text-2xl">{products.length}</span>{" "}
                  Products
                </p>
              </div>
              <button
                className="hover:bg-red-500 duration-200 rounded-full p-2"
                onClick={hideCart}
              >
                <FaX />
              </button>
            </div>
            <>
              {products.length == 0 ? (
                <ContinueShopping />
              ) : (
                <div className="h-[70vh] overflow-y-scroll ">
                  {products.map((list: showCartT) => (
                    <div key={list.id} className="shadow">
                      <div className="flex px-2 py-3   ">
                        <img
                          src={list.src}
                          className="size-30 object-cover"
                          alt=""
                        />
                        <div className="flex justify-between w-full pr-6 items-center">
                          <div className="ml-4 flex flex-col justify-around">
                            <h3>{list.title}</h3>
                            <h3 className="my-3">
                              ₦ {list.price.toLocaleString()}
                            </h3>
                            <div className="flex items-center">
                              <button className="border py-1 px-3  rounded-lg">
                                -
                              </button>
                              <p className="mx-3">{list.quantity}</p>
                              <button
                                className="border py-1 px-3 hover:bg-secondary duration-200 bg-primary  rounded-lg
                              "
                                onClick={() =>
                                  (list.quantity = list.quantity + 1)
                                }
                              >
                                +
                              </button>
                            </div>
                          </div>

                          <div className="flex justify-end flex-col items-end">
                            <FaX />
                            <p className="my-4">
                              {" "}
                              ₦ {list.price.toLocaleString()}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          </div>

          {products.length !== 0 && (
            <div className="flex flex-col justify-between p-6 text-2xl">
              <div className="flex w-full my-2 justify-between">
                <h4>Sub Total:</h4>
                <h4 className="font-bold">₦ {totalAmount.toLocaleString()}</h4>
              </div>
              <Link
                to="/checkout"
                className="w-full text-center font-bold text-white mb-4 py-3 rounded-lg bg-primary"
                onClick={hideCart}
              >
                Checkout Now
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
