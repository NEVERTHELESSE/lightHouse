export default function AdminProductSelection({ active, setActive }: any) {
  const options = [
    "add Product",
    "all Product",
    "laptop",
    "phones",
    "mouse",
    "keyboard",
  ];
  return (
    <div className="flex">
      {options.map((option) => (
        <button
          onClick={() => setActive(option)}
          className={`mr-4 capitalize ${option == active ? "text-secondary font-bold" : "text-gray-500 scale-95"}`}
          key={option}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
