import { forwardRef } from "react";
import PropTypes from 'prop-types'

const Input = forwardRef(
  ({ value, onChange, className, name, type, placeholder, disabled }, ref) => {
    return (
      <input
        className={`w-full py-1.5 placeholder:opacity-60 placeholder:text-lg tracking-wide placeholder:text-zinc-50 px-2 text-[1.1rem] bg-zinc-800 text-zinc-50 outline-none border-none rounded-sm ${className}`}
        value={value}
        onChange={onChange}
        ref={ref}
        type={type}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
      />
    );
  }
);


Input.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool
}

Input.displayName = 'Input'

export default Input;
