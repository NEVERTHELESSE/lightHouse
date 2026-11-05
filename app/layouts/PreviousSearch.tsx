import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function PreviousSearch() {
  const { data, error, isPending } = useQuery({
    queryKey: ["search"],
    queryFn: async () => {
      const result = await axios.get(`http://localhost:5173/api/search?id=31`);
      console.log(result.data.message);
      return result.data.message;
    },
  });

  return (
    <div>
      {error ? (
        "error"
      ) : (
        <>
          {isPending ? (
            "loading"
          ) : (
            <>
              {data.map((r, index) => (
                <button
                  key={index}
                  className="bg-soft shadow rounded-2xl px-4 py-2 mx-2"
                >
                  {r}
                </button>
              ))}
            </>
          )}
        </>
      )}
    </div>
  );
}
