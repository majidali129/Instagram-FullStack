import { GoArrowLeft } from "react-icons/go";
import { useMoveBack } from "../hooks/useMoveBack";

const BackButton = () => {
  const moveBack = useMoveBack();
  return (
    <button
      onClick={moveBack}
      className="absolute flex items-center px-5 py-2 text-white rounded opacity-90 hover:opacity-100 outline-1 outline outline-zinc-500 bg-zinc-900 gap-x-4 top-10 left-6 md:left-48 md:shadow-[rgba(235,235,235,0.87)_70px_48px_110px_0px]"
    >
      <GoArrowLeft className="w-6 h-6" /> Go Back
    </button>
  );
};

export default BackButton;
