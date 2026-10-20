export default function BarChart() {
  const lists = Array.from({ length: 10 }, (_, i: number) => i + 1);
  const Bars = Array.from({ length: 6 }, (_, i: number) => i + 1);
  const bars = [
    { id: "1", amount: 900, title: "Jan" },
    { id: "2", amount: 800, title: "Feb" },
    { id: "3", amount: 400, title: "Mar" },
    { id: "4", amount: 700, title: "Apr" },
    { id: "5", amount: 400, title: "May" },
    { id: "6", amount: 500, title: "June" },
  ];
  return (
    <div className="flex items-end h-full">
      <div className="w-20  flex flex-col justify-around h-full">
        {lists.reverse().map((list) => (
          <p className="" key={list}>
            $ {list * 100}
          </p>
        ))}
      </div>
      <div className="flex pb-4 ml-3 w-full h-full  justify-around ">
        {bars.map(({ id, amount, title }) => (
          <div key={id} className="w-20 flex  flex-col justify-end h-full ">
            <div
              className={` bg-secondary w-full rounded-2xl`}
              style={{
                height: `${amount / 10 - 10}%`,
              }}
            ></div>
            <p className="">{title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
