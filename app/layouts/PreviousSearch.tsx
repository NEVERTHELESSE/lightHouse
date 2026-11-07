import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router";

export default function PreviousSearch() {
  const { data, error, isPending } = useQuery({
    queryKey: ["search"],
    queryFn: async () => {
      const result = await axios.get(`http://localhost:5173/api/search?id=31`);
      return result.data.message;
    },
  });

  return (
    <div className="my-3">
      {error ? (
        "error"
      ) : (
        <>
          {isPending ? (
            "loading previous search"
          ) : (
            <>
              {data.map((r: string, index: number) => (
                <Link
                  to={`/s?${r}`}
                  key={index}
                  className="bg-soft shadow rounded-2xl px-4 py-2 mx-2"
                >
                  {r}
                </Link>
              ))}
            </>
          )}
        </>
      )}
    </div>
  );
}
