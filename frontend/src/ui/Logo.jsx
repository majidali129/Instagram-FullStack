import { Link } from "react-router-dom";
import logo from "../../public/images/logo.png";
import PropTypes from "prop-types";

const Logo = ({ className }) => {
  return (
    <Link to="/">
      <div className="flex items-center px-2 max-sm:justify-center gap-x-2">
        <figure className="w-8 h-8 ">
          <img src={logo} alt="Snapgram's logo" className="w-full h-full" />
        </figure>
        <h3
          className={`hidden text-3xl italic font-extrabold tracking-wider logo-text sm:block ${className}`}
        >
          InstaVerse
        </h3>
      </div>
    </Link>
  );
};

Logo.propTypes = {
  className: PropTypes.string
};

export default Logo;
