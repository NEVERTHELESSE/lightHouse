export default function BarChart() {
  const lists = Array.from({ length: 10 }, (_, i: number) => i + 1);
  const bars = [
    { id: "1", amount: 900000, title: "Jan", color: "#05df7" },
    { id: "2", amount: 800000, title: "Feb", color: "yellow" },
    { id: "3", amount: 400000, title: "Mar", color: "dodgerblue" },
    { id: "4", amount: 700000, title: "Apr", color: "brown" },
    { id: "5", amount: 400000, title: "May", color: "green" },
    { id: "6", amount: 500000, title: "June", color: "green" },
  ];
  return (
    <div className="flex items-end h-full">
      <div className="w-20  flex flex-col justify-around h-full">
        {lists.reverse().map((list) => (
          <p className="" key={list}>
            ₦{(list * 100000).toLocaleString()}
          </p>
        ))}
      </div>
      <div className="flex pb-4 ml-3 w-full h-full  justify-around ">
        {bars.map(({ id, amount, title, color }) => (
          <div key={id} className="w-20 flex  flex-col justify-end h-full ">
            <div
              className={` bg-secondary w-full rounded-2xl duration-200`}
              style={{
                height: `${amount / 10000 - 10}%`,
                background: `${color}`,
              }}
            ></div>
            <p className="">{title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
