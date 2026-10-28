import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useLocation } from "react-router";
import { api } from "~/api/api";

export default function Checkoutsuccess() {
  const locate = useLocation().search.split("=")[1];
  const { data, error, isPending } = useQuery({
    queryKey: [locate],
    queryFn: async () => {
      const result = await api.get(`checkoutsuccess?ord=${locate}`);
      console.log(result.data.message);
      return result.data.message;
    },
  });

  return (
    <div className="w-screen flex justify-center items-center h-screen">
      {error ? (
        "error"
      ) : (
        <>
          {isPending ? (
            "loading"
          ) : (
            <>
              {data == "invalid order id" ? (
                "invalid order id "
              ) : (
                <h3 className="text-4xl">success</h3>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
}
