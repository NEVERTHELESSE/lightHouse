import {
  useState,
  lazy,
  Suspense,
  type FormEvent,
  type ChangeEvent,
  useEffect,
} from "react";
import { FiSearch } from "react-icons/fi";
import { useQuery } from "@tanstack/react-query";

import axios from "axios";
const SearchItem = lazy(() => import("./SearchItem"));
import { supabase } from "~/lib/subase";
import userCounterStore from "~/stores/userCart";

export function Search() {
  const [suggestion, setSuggestion] = useState(false);
  const [input, setInput] = useState("");
  const user = userCounterStore((state: any) => state.user);

  function findProduct(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (user.id) {
      console.log(user.id, input);
      const result = axios
        .get(`http://localhost:5173/api/savesearch?id=${user.id}&&s=${input}`)
        .then((res) => console.log(res.data));
    } else {
      console.log("search cant be save  ");
    }
  }
  useEffect(() => {
    const timer = setTimeout(async () => {
      try {
        if (input.length > 3) {
          setSuggestion(true);
          useQuery({
            queryKey: [input],
            queryFn: async () => {
              const result = supabase
                .from("products")
                .select("title, files, price, width, height")
                .eq("title", input);
              console.log(result);
            },
          });
        }
      } catch (error) {
        console.error("search failed");
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [input]);

  return (
    <div className="lg:w-[40%]">
      <form
        action="post"
        onSubmit={findProduct}
        className="w-full  py-1 items-center bg-[#dadada5b] rounded-2xl sm:rounded-full pr-1 pl-3 flex"
      >
        <FiSearch />
        <input
          type="text"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setInput(e.target.value)
          }
          placeholder="Search Gadget"
          className="w-full focus:outline-none ml-2"
        />
        <button className="bg-primary rounded-lg sm:rounded-full p-1 lg:p-4 ">
          <FiSearch />
        </button>
      </form>

      {suggestion && (
        <div className="w-full bg-white border-y border-y-soft h-100 absolute left-0 my-2 shadow flex flex-wrap justify-center rounded-2xl items-center">
          <Suspense fallBack="loading">
            <SearchItem />
          </Suspense>
        </div>
      )}
    </div>
  );
}
