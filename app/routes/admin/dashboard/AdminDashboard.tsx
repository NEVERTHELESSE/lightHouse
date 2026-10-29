import { FaArrowRightToCity } from "react-icons/fa6";
import Revenue from "../Revenue";
import TotalGadget from "./TotalGadget";
import DashboardTotalUser from "./DashboardTotalUser";
import AdminPendingOrder from "./AdminPendingOrder";
import AdminMessage from "./AdminMessages";

export default function AdminDashboard() {
  return (
    <div className="p-4 flex">
      <div>
        <h3 className="text-3xl font-bold ">Hello, Neverthelesse! </h3>
        <h4 className="text-gray-600 my-4">This is what's in your store </h4>
        <div className=" flex mb-6">
          <TotalGadget />
          <DashboardTotalUser />
        </div>
        <div className=" flex mt-3">
          <AdminPendingOrder />
          <AdminMessage />
        </div>
      </div>
      <Revenue />
    </div>
  );
}
