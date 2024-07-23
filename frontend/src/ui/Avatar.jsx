import PropTypes from "prop-types";

const Avatar = ({ image, className }) => {
  return (
    <figure
      className={`border rounded-full cursor-pointer w-11 h-11 sm:w-14 sm:h-14 ${className}`}
    >
      <img
        src={image}
        alt="user profile phote"
        className="object-cover w-full h-full rounded-full"
      />
    </figure>
  );
};

Avatar.propTypes = {
  image: PropTypes.string,
  className: PropTypes.string
};
export default Avatar;
