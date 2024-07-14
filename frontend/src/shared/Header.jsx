import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { MdMic } from "react-icons/md";
import { MdNotifications } from "react-icons/md";

const Header = () => {
  const [query, setQuery] = useState("");
  return (
    <nav className="flex items-center justify-between h-full px-4 bg-inherit rounded-tr-md">
      <form
        action=""
        className="flex items-center px-2 border rounded-md gap-x-2 border-zinc-800"
      >
        <BiSearch className="w-6 h-6 opacity-60" />
        <input
          type="text"
          name="query"
          id=""
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          className="bg-inherit py-1.5 px-1.5 outline-none border-none text-[.95rem] w-full"
        />
        {!query && <MdMic className="w-6 h-6 opacity-60" />}
      </form>
      <div className="actions">
        <MdNotifications className="w-6 h-6 hover:cursor-pointer" />
      </div>
    </nav>
  );
};

export default Header;
