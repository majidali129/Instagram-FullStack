import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { CgInstagram } from "react-icons/cg";

const Logo = ({ className }) => {
  return (
    <Link to="/">
      <div className="flex items-center px-2 max-sm:justify-center gap-x-2">
        <CgInstagram className="md:-mt-6 w-7 h-7" />
        <h3
          className={`hidden text-2xl italic !font-extrabold logo-text md:block ${className}`}
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
