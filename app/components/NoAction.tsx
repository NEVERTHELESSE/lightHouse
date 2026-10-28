import { toast } from "react-toastify";

export default function NoAction() {
  return (
    <div
      className="fixed flex justify-center items-center w-screen h-screen bg-white top-0 left-0 "
      onClick={() => toast.warning("Bulk operation in process kindly wait")}
    >
      <div className="flex flex-col  justify-center items-center">
        <h3 className="text-3xl font-bold">40%</h3>
        <div className="w-200 h-5  rounded-2xl my-3 bg-green-400">
          <div className="h-full w-[40%] rounded-2xl bg-green-600 "></div>
        </div>
        <p>Adding Product to database</p>
      </div>
    </div>
  );
}
