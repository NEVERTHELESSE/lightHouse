import { FaArrowRightToCity } from "react-icons/fa6";
import Revenue from "./Revenue";

export default function AdminDashboard() {
  return (
    <div className="p-4 flex">
      <div>
        <h3 className="text-3xl font-bold ">Hello, Seun! </h3>
        <h4 className="text-gray-600 my-4">This is what's in your store </h4>
        <div className=" flex mb-6">
          <div className="rounded-l-4xl shadow text-white  mr-2 rounded-tr-4xl bg-linear-90 from-primary to-secondary h-70 w-100">
            <div className="flex p-8 items-center justify-between">
              <h3 className="text-3xl font-bold">Total Gadget</h3>
              <button
                title="view all product"
                className="bg-white p-4 text-2xl  text-primary font-bold rounded-full"
              >
                <FaArrowRightToCity />
              </button>
            </div>
            <div className="flex justify-around items-center">
              <h4 className="text-5xl font-bold flex text-center">143</h4>
              <button className="bg-green-400 shadow rounded-2xl px-4 py-1 h-max ">
                + 23%
              </button>
            </div>
            <div className="p-4">
              <p className="font-bold">
                Total gadget including Laptop, Phone, e.t.c
              </p>
              <div className="flex justify-between items-center">
                <p className="text-overlay italic">
                  Data is update in real time
                </p>
                <button
                  title="view all product"
                  className="bg-white p-4 text-2xl  text-primary font-bold rounded-t-full rounded-l-full"
                >
                  Info
                </button>
              </div>
            </div>
          </div>
          <div className="rounded-r-4xl shadow  mr-2 rounded-tl-4xl border bg-white border-gray-300  h-70 w-100">
            <div className="flex p-8 items-center justify-between">
              <h3 className="text-3xl font-bold">Numbers of Users</h3>
              <button
                title="view all product"
                className="bg-primary p-4 text-2xl  text-white font-bold rounded-full"
              >
                <FaArrowRightToCity />
              </button>
            </div>
            <h4 className="text-5xl font-bold text-center">143</h4>
            <div className="p-4">
              <p className="font-bold">
                Total gadget including Laptop, Phone, e.t.c
              </p>
              <div className="flex justify-between items-center">
                <button
                  title="view all product"
                  className="bg-primary p-4 text-2xl  text-white font-bold rounded-t-full rounded-r-full"
                >
                  Info
                </button>
                <p className=" italic">Data is update in real time</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex mt-3">
          <div className="rounded-4xl shadow text-white  mr-2 rounded-tr-4xl bg-linear-90 from-primary to-secondary h-70 w-100">
            <div className="flex p-8 items-center justify-between">
              <h3 className="text-3xl font-bold">Pending Order</h3>
              <button
                title="view all product"
                className="bg-white p-4 text-2xl  text-primary font-bold rounded-full"
              >
                <FaArrowRightToCity />
              </button>
            </div>
            <div className="flex justify-around items-center">
              <h4 className="text-5xl font-bold flex text-center">121</h4>
              <button className="bg-green-400 shadow rounded-2xl px-4 py-1 h-max ">
                + 23%
              </button>
            </div>
            <div className="p-4">
              <p className="font-bold">Ongoing order</p>
              <div className="flex justify-between items-center">
                <p className="text-overlay italic">
                  Data is update in real time
                </p>
                <button
                  title="view all product"
                  className="bg-white p-4 text-2xl  text-primary font-bold rounded-t-full rounded-l-full"
                >
                  Info
                </button>
              </div>
            </div>
          </div>
          <div className="rounded-4xl shadow  mr-2 rounded-tl-4xl border bg-white border-gray-300  h-70 w-100">
            <div className="flex p-8 items-center justify-between">
              <h3 className="text-3xl font-bold">Messages</h3>
              <button
                title="view all product"
                className="bg-primary p-4 text-2xl  text-white font-bold rounded-full"
              >
                <FaArrowRightToCity />
              </button>
            </div>
            <h4 className="text-5xl font-bold text-center">43</h4>
            <div className="p-4">
              <p className="font-bold">Including review about products</p>
              <div className="flex justify-between items-center">
                <button
                  title="view all product"
                  className="bg-primary p-4 text-2xl  text-white font-bold rounded-t-full rounded-r-full"
                >
                  Info
                </button>
                <p className=" italic">Data is update in real time</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Revenue />
    </div>
  );
}
