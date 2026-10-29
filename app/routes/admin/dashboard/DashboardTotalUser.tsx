import { useQuery } from "@tanstack/react-query";
import { FaArrowRightToCity } from "react-icons/fa6";
import { api } from "~/api/api";

export default function DashboardTotalUser() {
  const { data, isPending, error } = useQuery({
    queryKey: ["users"],
    queryFn: async () => await api.get("users"),
  });
  return (
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
      {/* <h4 className="text-5xl font-bold text-center">143</h4> */}
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
      <div className="p-4">
        <p className="font-bold">Total gadget including Laptop, Phone, e.t.c</p>
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
  );
}
