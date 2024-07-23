import { useOutletContext } from "react-router-dom";
import PostCard from "./PostCard";

const UserLikedPosts = () => {
  const [{ likedPosts }] = useOutletContext();
  return (
    <ul className="grid gap-2 py-2 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 max-sm:gap-y-2">
      {likedPosts &&
        likedPosts?.map((post) => <PostCard key={post._id} post={post} />)}
    </ul>
  );
};

export default UserLikedPosts;
