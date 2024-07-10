import Logo from "./Logo";
import { CiHeart } from "react-icons/ci";
import { RiAddBoxFill } from "react-icons/ri";

const Header = () => {
  return (
    <div className="flex items-center sm:hidden  w-full justify-between py-1.5 px-2.5">
      <span>
        <Logo />
      </span>
      <div className="flex items-center justify-between actions gap-x-4">
        <span className="*:w-7 *:h-7">
          <RiAddBoxFill />
        </span>
        <span className="*:w-7 *:h-7">
          <CiHeart />
        </span>
      </div>
    </div>
  );
};

export default Header;
