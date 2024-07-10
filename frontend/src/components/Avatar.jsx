const Avatar = ({ image }) => {
  return (
    <img
      src={image}
      className="border w-14 h-14 border-zinc-600 rounded-full"
      alt=""
    />
  );
};

export default Avatar;
