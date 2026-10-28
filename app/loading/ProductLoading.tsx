export default function ProductLoading() {
  const lists = Array.from({ length: 20 }, (_, i) => i + 1);
  return (
    <div className="flex p-2 m-2 md:my-10 md:p-10  flex-wrap justify-between items-center">
      {lists.map((list) => (
        <div
          key={list}
          className="rounded-2xl my-2 w-full sm:w-[calc(100%/4.2)] shadow-lg box  overflow-hidden bg-gray-400 "
        >
          <div className="w-full h-70"></div>
          <div className="h-40 animate-pulse flex flex-col justify-around bg-gray-300 px-4 py-2">
            <div className="w-[90%] bg-gray-500 rounded-full h-8"></div>
            <div className="w-[50%] bg-gray-500 rounded-full h-8"></div>
            <div className="w-[80%] bg-gray-500 rounded-full h-8"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
