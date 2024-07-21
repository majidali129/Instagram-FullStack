import { useUser } from "../authentication/useGetCurrentUser";
import Loader from '../../ui/Loader'
import PostOverlay from "../../ui/PostOverlay";

const UserSavedPosts = () => {
  const {user, isLoadingUser} = useUser ();
  console.log(user)
  if(isLoadingUser) return <Loader />
  return (
    <ul className="grid gap-2 py-2 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 max-sm:gap-y-2">
      {
        user?.savedPosts?.map(post => <figure key={post._id} className=" rounded *:rounded max-h-[345px] h-[345px] relative group">
          <img src={post.mediaUrl} alt="saved post image" className="object-cover w-full h-full" />
          <PostOverlay comments={post?.comments?.length}  likes={post?.likes?.length}/>
        </figure>)
      }
    </ul>
  );
};

export default UserSavedPosts;
