import { forwardRef } from "react";
import PropTypes from 'prop-types'

const Form = forwardRef(({ onSubmit, children, className }, ref) => {
  return (
    <form
    autoComplete="off"
      className={`bg-zinc-900 space-y-3 md:space-y-4 shadow-[#ffffff1c_0px_7px_29px_0px] md:max-w-sm rounded-sm mx-auto ${className}`}
      ref={ref}
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
});

Form.displayName = "Form"

Form.propTypes = {
  onSubmit: PropTypes.func,
  children: PropTypes.element,
  className: PropTypes.string,
}

export default Form;
