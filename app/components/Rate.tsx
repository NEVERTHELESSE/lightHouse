import { FaStar } from "react-icons/fa";

type proppT = {
  length: number;
};
export default function Rate({ length }: proppT) {
  const lists = Array.from({ length }, (_, i) => i + 1);

  return (
    <div className="flex w-max">
      {lists.map((list) => (
        <FaStar className="text-primary mr-1 " key={list} />
      ))}
    </div>
  );
}
