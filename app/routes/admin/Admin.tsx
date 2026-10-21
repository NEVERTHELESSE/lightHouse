import { useState } from "react";
import AdminHeader from "./AdminHeader";
import AdminLeftBar from "./AdminLeftBar";
import { tabs } from "~/data/adminTabs";

export default function Admin() {
  const [active, setActive] = useState("dashboard");
  const selected = tabs.filter(
    (tab) => tab.title === "dashboard" && tab.component
  );
  return (
    <div className="flex bg-gray-200 pr-10 h-screen  ">
      <AdminLeftBar active={active} setActive={setActive} />
      <div className="w-full">
        <AdminHeader />
        {tabs
          .filter((tab) => tab.title == active)
          .map((tab) => (
            <>{tab.component}</>
          ))}
      </div>
    </div>
  );
}
