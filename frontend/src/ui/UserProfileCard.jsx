import { Link } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";
import { useFetchPosts } from "../features/posts/useFetchPosts";
import Avatar from "./Avatar";
import Button from "./Button";
import Loader from "./Loader";

const UserProfileCard = () => {
  const {user, loadingUser} = useUser()
  const {loadingPosts, posts} = useFetchPosts(user?.username);
  const totalPosts = posts?.length,
  followers = user?.followers.length,
  following= user?.following.length

  if(loadingUser || loadingPosts) return <Loader />
  return (
    <div className="flex flex-col items-center justify-center py-3 space-y-3.5 border-b border-b-zinc-700">
      <Avatar image={user?.avatar} />
      <div className="flex flex-col items-center justify-center w-full space-y-2 text-center">
          <Link to={`profile/${user?.username}`}><h3>{user?.username}</h3></Link>
        <Button className="shadow-none !py-1 text-sm">Edit</Button>
      </div>
      <div className="flex items-center justify-between *:flex *:flex-col *:items-center stats gap-x-3">
        <div>
          <h4>{totalPosts}</h4>
          <span className="opacity-60">{posts===1? 'Post': 'Posts'}</span>
        </div>
        <div>
          <h4>{followers}</h4>
          <span className="opacity-60">{followers===1?'Follower':'Followers'}</span>
        </div>
        <div>
          <h4>{following}</h4>
          <span className="opacity-60">Following</span>
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;
