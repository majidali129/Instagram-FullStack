import { useEffect, useState } from "react";
import { MdMic } from "react-icons/md";
import { MdCancel } from "react-icons/md";
import Avatar from "./Avatar";
import { Link } from "react-router-dom";
import { useModalContext } from "./Modal";
import { useQuery } from "@tanstack/react-query";
import { getAllUsers } from "../api/services/user-service";
import Loader from './Loader'

const Search = () => {
  const { close } = useModalContext();
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState(query);
  const { data: users, isLoading: gettingUsers } = useQuery({
    queryKey: ["users", debouncedQuery],
    queryFn: () => getAllUsers(debouncedQuery),
    enabled: !!debouncedQuery
  });

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedQuery(query);
    }, 400);

    return () => {
      clearTimeout(timerId);
    };
  }, [query]);

  return (
    <div className=" bg-zinc-800 overflow-hidden h-[70vh] md:-left-60 max-w-md w-[22rem] md:w-[30rem] py-4 md:py-7 space-y-3 md:space-y-5 px-4 rounded">
      <h2>Search</h2>
      <form className="relative flex items-center border rounded-md gap-x-2 border-zinc-800">
        <input
          type="text"
          name="query"
          autoComplete="off"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          className="!bg-zinc-900 py-1.5 px-2 focus:outline-none focus:border-none text-[.95rem] w-full"
        />
        {!query && <MdMic className="w-6 h-6 cursor-pointer" />}
        {query && (
          <MdCancel
            className="absolute w-5 h-5 cursor-pointer right-2"
            onClick={() => setQuery("")}
          />
        )}
      </form>
      {
        gettingUsers && <Loader />
      }
        {users?.length > 0 && <ul className="space-y-2 results h-[70%] *:border-b *:border-b-zinc-700 *:py-1.5 *:grid *:grid-cols-[50px_1fr] *:gap-x-1 md:*:gap-x-5 !overflow-y-scroll">
            {users?.map((user) => (
                <Link
                  key={user?._id}
                  to={`profile/${user?.username}`}
                  onClick={() => close()}
                >
                  <Avatar image={user?.avatar} />
                  <div>
                    <h4>{user?.username}</h4>
                    <span className="text-sm opacity-70">
                      Front-End Developer
                    </span>
                  </div>
                </Link>
              ))}
          </ul>}
      {!gettingUsers && <div className="  h-[70%] flex items-center justify-center">No Results Found</div>}
    </div>
  );
};

export default Search;
