import { useState, type FormEvent, type ChangeEvent, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import SearchItem from "./SearchItem";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "~/lib/subase";

export function Search() {
  const [suggestion, setSuggestion] = useState(false);
  const [input, setInput] = useState("");
  function findProduct(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
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
          <SearchItem />
        </div>
      )}
    </div>
  );
}
