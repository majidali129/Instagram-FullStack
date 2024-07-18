import Avatar from "./Avatar";
import Button from "./Button";

const UserProfileCard = () => {
  return (
    <div className="flex flex-col items-center justify-center py-3 space-y-3.5 border-b border-b-zinc-700">
      <Avatar />
      <div className="space-y-2 text-center w-full flex items-center flex-col justify-center">
          <h3>username</h3>
        <Button className="shadow-none !py-1 text-sm">Edit</Button>
      </div>
      <div className="flex items-center justify-between *:flex *:flex-col *:items-center stats gap-x-3">
        <div>
          <h4>98</h4>
          <span className="opacity-60">Posts</span>
        </div>
        <div>
          <h4>130</h4>
          <span className="opacity-60">Followers</span>
        </div>
        <div>
          <h4>980</h4>
          <span className="opacity-60">Following</span>
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;
