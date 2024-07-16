import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { MdNotifications } from "react-icons/md";
import { Modal, ModalProvider } from "./Modal";
import Search from "./Search";

const Header = () => {
  const [query, setQuery] = useState("");


  return (
    <ModalProvider>
      <>

    <nav className="flex items-center justify-between h-full md:px-4 px-2 bg-zinc-900 rounded-tr-md">
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
          autoComplete={false}
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
      <div className="actions">
        <Modal.Open opens="notifications">
        <MdNotifications className="w-6 h-6 hover:cursor-pointer" />
        </Modal.Open>
      </div>
    </nav>
          <Modal.Window name="notifications">
            <h2>Notifications</h2>
          </Modal.Window>
          </>
    </ModalProvider>
  );
};

export default Header;
