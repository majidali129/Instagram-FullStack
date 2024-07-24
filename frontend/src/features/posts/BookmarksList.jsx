import PostCard from "./PostCard";
import { useUser } from "../authentication/useUser";
import Loader from "../../ui/Loader";

const BookMarkList = () => {
  const { user, loadingUser } = useUser();
  if (loadingUser) return <Loader />;
  return (
    <ul className="grid gap-2 py-2 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 max-sm:gap-y-2">
      {user &&
        user?.savedPosts.map((post) => <PostCard key={post._id} post={post} />)}
    </ul>
  );
};

export default BookMarkList;
