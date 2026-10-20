export default function SingleProductLoading() {
  const lists = Array.from({ length: 5 }, (_, i) => i + 1);
  return (
    <div className="w-full flex justify-around ">
      <div className="w-[50%] bg-gray-300 animate-pulse h-[60vh] "></div>
      <div className="flex flex-col justify-between">
        {lists.map((list) => (
          <div key={list} className="size-15 bg-gray-500 animate-pulse"></div>
        ))}
      </div>
      <div className="w-[40%] bg-gray-400 animate-pulse h-[60vh]"></div>
    </div>
  );
}
