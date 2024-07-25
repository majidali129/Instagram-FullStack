import { FadeLoader } from "react-spinners";
const Loader = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <FadeLoader color="#15abc5" loading size={30} speedMultiplier={1} />
    </div>
  );
};

export default Loader;
