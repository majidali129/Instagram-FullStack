import Avatar from "./Avatar";

const HorizontalCard = ({ info, actionText, image, username }) => {
  return (
    <div className="flex justify-between items-center  py-2">
      <div className="flex items-center justify-start gap-x-2">
        <span>
          <Avatar image={image} />
        </span>
        <div>
          <h3>{username}</h3>
          <span className="opacity-50 text-sm">{info}</span>
        </div>
      </div>
      <div className="text-blue-500">{actionText}</div>
    </div>
  );
};

export default HorizontalCard;
