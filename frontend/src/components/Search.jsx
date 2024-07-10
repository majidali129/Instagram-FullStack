import { MdCancel } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import Avatar from "./Avatar";
import { useState } from "react";

const Search = () => {
  const [query, setQuery] = useState("");
  return (
    <div className="relative w-full h-full overflow-hidden">
      <section className="bg-inherit w-[500px] space-y-3  border-r border-r-zinc-600 rounded-r-md h-[100vh] py-3 px-5">
        <form className="h-[20%] space-y-6 border-b-zinc-600">
          <h2 className="text-2xl font-semibold tracking-wide ">Search</h2>
          <div className="flex items-center w-full rounded-md group bg-zinc-800 ">
            <span className="p-2 ease-in group-focus-within:hidden opacity-60">
              <IoSearchOutline className="w-5 h-5" />
            </span>
            <input
              className="w-full px-2 py-2 border-none outline-none group-focus-within:rounded-md bg-inherit"
              type="text"
              name="search"
              id="search"
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <span
              className={`p-2 cursor-pointer ${query === "" && "hidden"}`}
              onClick={() => setQuery("")}
            >
              <MdCancel className="w-5 h-5" />
            </span>
          </div>
        </form>

        <div className="h-[calc((100vh-20%)-24px)] hidden ">
          <h3>Recent</h3>
          <div className="flex items-center justify-center w-full h-full">
            <p>No recent search</p>
          </div>
        </div>
        <ul className="space-y-4">
          <li className="flex items-center w-full gap-x-3 bg-inherit">
            <Avatar image="" />
            <div className="flex flex-col items-start info">
              <h4>username</h4>
              <p className="text-sm opacity-50 bio">all about user</p>
            </div>
          </li>
          <li className="flex items-center w-full gap-x-3 bg-inherit">
            <Avatar image="" />
            <div className="flex flex-col items-start info">
              <h4>username</h4>
              <p className="text-sm opacity-50 bio">all about user</p>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Search;
