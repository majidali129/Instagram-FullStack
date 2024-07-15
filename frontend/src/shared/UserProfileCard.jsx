import Avatar from "./Avatar";

const UserProfileCard = () => {
  return (
    <div className="flex flex-col items-center justify-center py-3 space-y-2 border-b border-b-zinc-700">
      <Avatar />
      <div className="space-y-1 text-center">
        <div>
          <h3>username</h3>
          <p className="text-gray">little bio</p>
        </div>
        <button>Edit</button>
      </div>
      <div className="flex items-center justify-between *:flex *:flex-col *:items-center stats gap-x-3">
        <div>
          <h4>98</h4>
          <span className="text-gray">Posts</span>
        </div>
        <div>
          <h4>130</h4>
          <span className="text-gray">Followers</span>
        </div>
        <div>
          <h4>980</h4>
          <span className="text-gray">Following</span>
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;
