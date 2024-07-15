import { forwardRef } from "react";

const Form = forwardRef(({ onSubmit, children, className }, ref) => {
  return (
    <form
      className={`bg-zinc-900 w-[90%] space-y-3 md:space-y-4 shadow-[#ffffff1c_0px_7px_29px_0px] md:max-w-sm rounded-sm mx-auto ${className}`}
      ref={ref}
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
});

export default Form;
