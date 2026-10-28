import { useEffect, useState } from "react";
import AdminHeader from "./AdminHeader";
import AdminLeftBar from "./AdminLeftBar";
import { tabs } from "~/data/adminTabs";
import { useLocation } from "react-router";

export default function Admin() {
  // const param = useLocation().hash;
  // const param = window.location.hash;
  const [active, setActive] = useState("loading");
  useEffect(() => {
    setActive(window.location.hash ? window.location.hash : "#dashboard");
  }, []);

  return (
    <div className="flex bg-gray-200 pr-10 h-screen  ">
      <AdminLeftBar active={active} setActive={setActive} />
      <div className="w-full">
        <AdminHeader />
        {active == "loading" ? (
          "loading"
        ) : (
          <>
            {tabs
              .filter((tab) => tab.to == active)
              .map((tab) => (
                <div key={tab.id}>{tab.component}</div>
              ))}
          </>
        )}
      </div>
    </div>
  );
}
