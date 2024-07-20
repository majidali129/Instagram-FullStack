import { Link } from "react-router-dom";
import { useUser } from "../features/authentication/useGetCurrentUser";
import Avatar from "./Avatar";
import Button from "./Button";

const UserProfileCard = () => {
  const {user: {data}, isLoadingUser} = useUser()
  console.log(data)
  const posts = 10,
  followers = 4,
  following= 10;

  if(isLoadingUser) return <span>wait...</span>
  return (
    <div className="flex flex-col items-center justify-center py-3 space-y-3.5 border-b border-b-zinc-700">
      <Avatar image={data?.avatar} />
      <div className="space-y-2 text-center w-full flex items-center flex-col justify-center">
          <Link to={`profile/${data?.username}`}><h3>{data?.username}</h3></Link>
        <Button className="shadow-none !py-1 text-sm">Edit</Button>
      </div>
      <div className="flex items-center justify-between *:flex *:flex-col *:items-center stats gap-x-3">
        <div>
          <h4>{posts}</h4>
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
