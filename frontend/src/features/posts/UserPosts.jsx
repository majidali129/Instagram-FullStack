import { useOutletContext } from "react-router-dom";
import PostCard from "./PostCard";
import Empty from "../../ui/Empty";

const UserPosts = () => {
  const [{ ownPosts }] = useOutletContext();
  if (!ownPosts.length)
    return <Empty message="No Posts found for this account." />;
  return (
    <ul className="grid gap-2 py-2 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 max-sm:gap-y-2">
      {ownPosts &&
        ownPosts?.map((post) => <PostCard key={post._id} post={post} />)}
    </ul>
  );
};

export default UserPosts;
