import { useOutletContext } from "react-router-dom";
import PostCard from "./PostCard";
import Empty from "../../ui/Empty";

const UserLikedPosts = () => {
  const [{ likedPosts }] = useOutletContext();
  if (!likedPosts.length)
    return <Empty message="You have'nt liked any post yet" />;
  return (
    <ul className="grid gap-2 py-2 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 max-sm:gap-y-2">
      {likedPosts &&
        likedPosts?.map((post) => <PostCard key={post._id} post={post} />)}
    </ul>
  );
};

export default UserLikedPosts;
