import PropTypes from "prop-types";

import Button from "./Button";

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <>
      <div className="flex items-center justify-center h-screen p-10 bg-zinc-900">
        <div className="bg-zinc-950 border space-y-5 flex items-center justify-center flex-col border-zinc-700 rounded p-10 flex-[0_1_40rem]">
          <h2> Something went worng! 🙄</h2>
          <p>{error?.message}</p>
          <Button varient="primary" onClick={resetErrorBoundary}>
            Try again
          </Button>
        </div>
      </div>
    </>
  );
};

ErrorFallback.propTypes = {
  error: PropTypes.string,
  resetErrorBoundary: PropTypes.func
};
export default ErrorFallback;
