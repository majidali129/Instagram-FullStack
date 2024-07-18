import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { MdNotifications } from "react-icons/md";
import { Modal, ModalProvider } from "./Modal";
import Search from "./Search";
import Notifications from "./Notifications";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate()


  return (
    <ModalProvider>
      <>

    <nav className="flex items-center justify-between h-full md:px-5 px-2 bg-zinc-900 rounded-tr-md">
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
      <div className="actions flex items-center gap-x-4">
        <Button varient="primary" className="!py-1" onClick={() => navigate('/accounts/emailsignup')}>Sign Up</Button>
        <Button varient="primary" className="!py-1" onClick={() => navigate('/accounts/login')}>Login</Button>
        <Modal.Open opens="notifications">
        <MdNotifications className="w-6 h-6 hover:cursor-pointer" />
        </Modal.Open>
      </div>
    </nav>
          <Modal.Window name="notifications">
            <Notifications />
          </Modal.Window>
          </>
    </ModalProvider>
  );
};

export default Header;
