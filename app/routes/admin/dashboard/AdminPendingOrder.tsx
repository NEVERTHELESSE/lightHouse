import { useQuery } from "@tanstack/react-query";
import { FaArrowRightToCity } from "react-icons/fa6";
import { api } from "~/api/api";

export default function AdminPendingOrder() {
  const { data, isPending, error } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => await api.get("orders"),
  });
  return (
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
        {isPending ? (
          "loading"
        ) : (
          <div className="flex justify-around items-center">
            <h4 className="text-5xl font-bold flex text-center">
              {data?.data.message}
            </h4>
            <button className="bg-green-400 shadow rounded-2xl px-4 py-1 h-max ">
              + 23%
            </button>
          </div>
        )}
        <button className="bg-green-400 shadow rounded-2xl px-4 py-1 h-max ">
          + 23%
        </button>
      </div>
      <div className="p-4">
        <p className="font-bold">Ongoing order</p>
        <div className="flex justify-between items-center">
          <p className="text-overlay italic">Data is update in real time</p>
          <button
            title="view all product"
            className="bg-white p-4 text-2xl  text-primary font-bold rounded-t-full rounded-l-full"
          >
            Info
          </button>
        </div>
      </div>
    </div>
  );
}
