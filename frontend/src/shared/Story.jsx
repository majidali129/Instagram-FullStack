import PropTypes from "prop-types";

const Story = ({ user }) => {
  const { username, avatar, story } = user;
  return (
    <li className="space-y-1">
      <figure className="sm:h-16 sm:w-16 h-12 w-12 rounded-full border-purple-700 border">
        {/* this will be user avatar || profile photo */}
        <img
          src={avatar || ""}
          alt=""
          className="border rounded-full h-full w-full"
        />
      </figure>
      <p>username</p>
    </li>
  );
};

Story.propTypes = {
  user: PropTypes.object
};

export default Story;
