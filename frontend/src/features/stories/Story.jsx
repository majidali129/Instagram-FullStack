import PropTypes from "prop-types";

const Story = ({ user }) => {
  const { username, avatar } = user;
  return (
    <li className="space-y-1">
      <figure className="w-12 h-12 border border-purple-700 rounded-full sm:h-16 sm:w-16">
        {/* this will be user avatar || profile photo */}
        <img
          src={avatar || ""}
          alt=''
          className="w-full h-full border rounded-full"
        />
      </figure>
      <p>{username}</p>
    </li>
  );
};

Story.propTypes = {
  user: PropTypes.object
};

export default Story;
