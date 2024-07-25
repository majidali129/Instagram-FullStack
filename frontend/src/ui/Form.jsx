import { forwardRef } from "react";
import PropTypes from "prop-types";

const Form = forwardRef(({ onSubmit, children, className }, ref) => {
  return (
    <form
      autoComplete="off"
      className={`bg-zinc-900 space-y-3.5 text-center shadow-[#ffffff1c_0px_7px_29px_0px] px-4 md:px-8 py-6 max-sm:w-[90%] md:w-[400px] rounded-sm mx-auto ${className}`}
      ref={ref}
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
});

Form.displayName = "Form";

Form.propTypes = {
  onSubmit: PropTypes.func,
  children: PropTypes.element,
  className: PropTypes.string
};

export default Form;
