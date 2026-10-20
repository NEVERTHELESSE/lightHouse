export default function SiteLoading() {
  return (
    <div className="flex w-full justify-around">
      <div className="bg-gray-500 overflow-hidden shadow-lg rounded-2xl w-[30%] animate-pulse ">
        <div className="w-full rounded-2xl bg-gray-500 h-70"></div>
        <div className="w-full  bg-gray-500 h-30"></div>
      </div>
      <div className="bg-gray-500 animate-pulse  overflow-hidden shadow-lg rounded-2xl w-[30%] ">
        <div className="w-full  rounded-2xl bg-gray-500 h-70"></div>
        <div className="w-full  bg-gray-500 h-30"></div>
      </div>
      <div className="bg-gray-500 animate-pulse  overflow-hidden shadow-lg rounded-2xl w-[30%] ">
        <div className="w-full animate-pulse rounded-2xl bg-gray-500 h-70"></div>
        <div className="w-full  bg-gray-500 h-30"></div>
      </div>
    </div>
  );
}
