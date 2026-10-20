import AdminDashboard from "./AdminDashboard";
import AdminHeader from "./AdminHeader";
import AdminLeftBar from "./AdminLeftBar";
import Revenue from "./Revenue";

export default function Admin() {
  return (
    <div className="flex bg-gray-200 pr-10 h-screen  ">
      <AdminLeftBar />
      <div className="w-full">
        <AdminHeader />
        <div className="flex">
          <AdminDashboard />
          <Revenue />
        </div>
      </div>
    </div>
  );
}
