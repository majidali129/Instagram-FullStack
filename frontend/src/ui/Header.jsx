import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { MdNotifications } from "react-icons/md";
import { Modal, ModalProvider } from "./Modal";
import Search from "./Search";
import Notifications from "./Notifications";

const Header = () => {
  const [query, setQuery] = useState("");


  return (
    <ModalProvider>

    <nav className="flex items-center justify-between h-full px-2 md:px-5 bg-zinc-900 rounded-tr-md">
      <Modal.Open opens="search">
      <form
        action=""
        className="flex items-center px-3 border rounded-md gap-x-2 border-zinc-800"
      >
        <BiSearch className="w-6 h-6 opacity-60" />
        <input
          type="text"
          name="query"
          readOnly
          id=""
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          className="bg-inherit py-1.5 px-1.5 outline-none border-none text-[.95rem] w-full"
          />
      </form>
      </Modal.Open>
      <Modal.Window name="search">
        <Search />
      </Modal.Window>

      <div className="flex items-center actions gap-x-4">
        <Modal.Open opens="notifications">
        <MdNotifications className="w-6 h-6 hover:cursor-pointer" />
        </Modal.Open>
      </div>
      <Modal.Window name="notifications">
            <Notifications />
      </Modal.Window>

    </nav>

    </ModalProvider>
  );
};

export default Header;
