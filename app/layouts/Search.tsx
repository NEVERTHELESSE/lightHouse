import {
  useState,
  lazy,
  Suspense,
  type FormEvent,
  type ChangeEvent,
  useEffect,
  useRef,
} from "react";
import { FiSearch } from "react-icons/fi";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const SearchItem = lazy(() => import("./SearchItem"));
const PreviousSearch = lazy(() => import("./PreviousSearch"));
import { supabase } from "~/lib/subase";
import userCounterStore from "~/stores/userCart";
import { api } from "~/api/api";

export function Search() {
  const [suggestion, setSuggestion] = useState(false);
  const [input, setInput] = useState("");
  const user = userCounterStore((state: any) => state.user);
  const searchTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  function findProduct(e: FormEvent<HTMLFormElement>) {
    if (user.id) {
      console.log(user.id, input);
      const result = axios
        .get(`http://localhost:5173/api/savesearch?id=${user.id}&&s=${input}`)
        .then((res) => console.log(res.data));
    } else {
      console.log("search cant be save  ");
    }
  }
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [noData, setNoData] = useState(false);
  function searchItem(e: ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
    if (e.target.value != "") {
      setSuggestion(true);
    } else {
      setSuggestion(false);
    }
    const value = e.target.value;
    if (searchTimeout.current) {
      clearTimeout(searchTimeout.current);
    }
    searchTimeout.current = setTimeout(async () => {
      if (!value.trim()) return;

      try {
        const res = await api(`searchitem?s=${encodeURIComponent(value)}`);
        if (res.data) {
          setProducts(res.data.message);
          if (res.data.message.length == 0) {
            setNoData(true);
          }
        }
        console.log(res.data);
      } catch (error) {
        console.error("Search failed:", error);
      }
    }, 1000);
  }

  return (
    <div className="lg:w-[40%]">
      <form
        action={`s?${input}`}
        onSubmit={findProduct}
        className="w-full  py-1 items-center bg-[#dadada5b] rounded-2xl sm:rounded-full pr-1 pl-3 flex"
      >
        <FiSearch />
        <input
          type="text"
          onChange={searchItem}
          placeholder="Search Gadget"
          className="w-full focus:outline-none ml-2"
        />
        <button className="bg-primary rounded-lg sm:rounded-full p-1 lg:p-4 ">
          <FiSearch />
        </button>
      </form>

      {suggestion && (
        <div className="w-full bg-white border-y border-y-soft h-100 absolute left-0 my-2 shadow p-10 justify-center rounded-2xl items-center">
          <Suspense fallback="loading">
            <PreviousSearch />
          </Suspense>
          <Suspense fallback="loading">
            <SearchItem data={products} loading={loading} noData={noData} />
          </Suspense>
        </div>
      )}
    </div>
  );
}
