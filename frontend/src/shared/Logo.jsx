import logo from "../../public/images/logo.png";

const Logo = ({ className }) => {
  return (
    <div className="flex items-center max-sm:justify-center gap-x-2">
      <figure className="w-8 h-8 ">
        <img src={logo} alt="Snapgram's logo" className="w-full h-full" />
      </figure>
      <h3
        className={`hidden text-2xl italic font-bold tracking-wider logo-text sm:block ${className}`}
      >
        Snapgram
      </h3>
    </div>
  );
};

export default Logo;
