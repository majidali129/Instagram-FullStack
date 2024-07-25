import PropTypes from "prop-types";

function Empty({ message }) {
  return (
    <p className="flex items-center justify-center !h-1/2 px-2 py-3 ">
      {message}
    </p>
  );
}

Empty.propTypes = {
  message: PropTypes.string
};
export default Empty;
