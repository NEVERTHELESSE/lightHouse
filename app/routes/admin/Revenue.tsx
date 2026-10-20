import { FaArrowUp } from "react-icons/fa";
import BarChart from "./BarChart";

export default function Revenue() {
  const months = [
    "this month",
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ];
  return (
    <div className="w-full">
      <select className="bg-white mb-10 capitalize shadow py-4 px-6 rounded-lg">
        {months.map((month) => (
          <option
            value="thisMonth"
            key={month}
            className="capitalize px-6 py-4"
          >
            {month}
          </option>
        ))}
      </select>
      <div className="w-full bg-white h-145  shadow rounded-2xl p-4 pb-8">
        <div className=" flex justify-between w-full rounded-2xl ">
          <div className="flex items-center">
            <h3 className="text-2xl font-bold">Revenue</h3>
            <p className="text-gray-500 ml-16">This month vs last month</p>
          </div>
          <button className="bg-primary rounded-full p-4">
            <FaArrowUp />
          </button>
        </div>
        <BarChart />
      </div>
    </div>
  );
}
