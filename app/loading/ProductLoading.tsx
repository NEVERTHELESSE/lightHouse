export default function ProductLoading() {
  return (
    <div className="flex">
      <div className="rounded-2xl my-2 lg:w-[calc(100%/4.2)] shadow-lg box  overflow-hidden bg-gray-500 ">
        <div className="w-full h-70"></div>
        <div className="h-40 animate-pulse flex flex-col justify-around bg-gray-400 px-4 py-2">
          <div className="w-[90%] bg-gray-500 rounded-full h-8"></div>
          <div className="w-[50%] bg-gray-500 rounded-full h-8"></div>
          <div className="w-[80%] bg-gray-500 rounded-full h-8"></div>
        </div>
      </div>
    </div>
  );
}
