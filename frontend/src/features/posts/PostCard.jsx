import PropTypes from "prop-types";
import PostOverlay from "../../ui/PostOverlay";
import { useNavigate } from "react-router-dom";

const PostCard = ({ post }) => {
  const navigate = useNavigate();

  return (
    <figure
      onClick={() => navigate(`/post/${post?._id}`)}
      key={post._id}
      className=" rounded *:rounded max-h-[345px] h-[345px] relative group"
    >
      <img
        src={post.mediaUrl}
        alt="saved post image"
        className="object-cover w-full h-full rounded"
      />
      <PostOverlay
        comments={post?.comments?.length}
        likes={post?.likes?.length}
      />
    </figure>
  );
};

PostCard.propTypes = {
  post: PropTypes.object
};

export default PostCard;
