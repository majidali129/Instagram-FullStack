import { forwardRef } from "react";
import PropTypes from 'prop-types'

const Button = forwardRef(
  (
    { onClick, varient, disabled, type = "button", className, children },
    ref
  ) => {
    return (
      <button
        className={` px-4 text-lg py-2 w-fit flex items-center justify-center gap-x-2 rounded-sm  ${
          varient === "primary"
            ? "bg-gradient-to-r from-indigo-500 to-cyan-500 shadow-[#63c4f13e_0px_8px_24px]"
            : "bg-zinc-700 text-zinc-50 shadow-[#63c4f122_0px_8px_24px]"
        } ${className}`}
        onClick={onClick}
        type={type}
        disabled={disabled}
        ref={ref}
      >
        {children}
      </button>
    );
  }
);

Button.propTypes = {
  onClick: PropTypes.func,
  varient: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.element
}


Button.displayName = 'Button'


export default Button;

// bg-gradient-to-r from-teal-400 to-gray-800
