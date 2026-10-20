import { options } from "~/data/data";

export default function Selection({ active, setActive }: any) {
  return (
    <div className="flex h-max py-1 bg-gray-200 md:rounded-full rounded-lg overflow-hidden">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => setActive(option)}
          className={`lg:px-5 px-1 md:py-3 mx-1 rounded-lg md:rounded-full capitalize duration-300 hover:bg-gray-300   ${option === active && " bg-primary text-white font-bold"} `}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
