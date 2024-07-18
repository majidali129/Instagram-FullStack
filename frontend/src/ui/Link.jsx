const CustomLink = ({ type, children }) => {
  return (
    <p className={` ${type === "primary" ? "text-blue-400" : "text-zinc-200"}`}>
      {children}
    </p>
  );
};

export default CustomLink;
