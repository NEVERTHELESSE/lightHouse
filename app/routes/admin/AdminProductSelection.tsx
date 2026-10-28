import { options } from "~/data/data";

export default function AdminProductSelection({ active, setActive }: any) {
  return (
    <>
      <div className="flex">
        {options.map((option: string) => (
          <button
            onClick={() => setActive(option)}
            className={`mr-4 capitalize ${option == active ? "text-secondary font-bold" : "text-gray-500 scale-95"}`}
            key={option}
          >
            {option}
          </button>
        ))}
      </div>
      <input type="color" />
    </>
  );
}
