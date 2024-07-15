import { FaRegHeart } from "react-icons/fa6";
import { BsSend } from "react-icons/bs";
import { BsThreeDots } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { GoBookmark } from "react-icons/go";
import { Link } from "react-router-dom";
import Avatar from "../shared/Avatar";
import { FaMusic } from "react-icons/fa";
import { useState } from "react";

const Reel = ({ video }) => {
  const [showCaption, setShowCaption] = useState(false);

  return (
    <div className=" relative h-full sm:w-[500px] grid sm:grid-cols-[1fr_60px] mx-auto">
      {/* VIDEO CONTAINER */}
      <div
        className="video-wrapper  relative w-full  sm:w-[82%] mx-auto
      "
      >
        {/* VIDEO */}
        <div className="h-full w-full rounded-md">
          <video className="w-full h-full rounded-md" autoPlay muted loop>
            <source src={video} type="video/mp4" />
          </video>
        </div>
        {/* VIDEO INFO */}
        <div className=" absolute bottom-0 left-0 right-0  ps-4 bg-transparent py-5 space-y-2 pe-5">
          <div className="flex items-center gap-x-2.5">
            <Avatar />
            <span className="font-semibold">username</span>
            <Link
              to="#"
              className="border border-zinc-300 py-1 px-2 rounded-sm bg-transparent"
            >
              Follow
            </Link>
          </div>
          <p
            role="button"
            className={`caption  py-1  text-sm`}
            onClick={() => setShowCaption(!showCaption)}
          >
            <span
              className={`capitalize overflow-hidden [word-spacing:.08rem] ${
                showCaption ? "" : "line-clamp-1"
              }`}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
              libero quo, soluta dignissimos quidem enim dolore, cumque
              assumenda earum corporis repellat perspiciatis quas, laboriosam
              explicabo iure eveniet culpa veritatis minus. - - - - - $lsdk
              #insta 🚀
            </span>
            {showCaption && <span>more</span>}
          </p>
          <div className="w-full py-1 px-2.5  flex items-center justify-start gap-x-3 backdrop-blur-lg border border-zinc-600 rounded-full">
            <span>
              <FaMusic />
            </span>
            <span>{"username"}</span>
            <span>Original audio</span>
          </div>
        </div>
      </div>
      {/* USER ACTIONS */}
      <div className="absolute w-[60px] bottom-24 sm:bottom-0 right-0 flex flex-col space-y-6 items-center justify-center *:flex *:items-center *:flex-col *:justify-center">
        <button>
          <FaRegHeart className="w-5 h-5 sm:w-6 sm:h-6" />
          <span>3,232</span>
        </button>
        <button>
          <FaRegComment className="w-5 h-5 sm:w-6 sm:h-6" />
          <span>3,232</span>
        </button>
        <button>
          <BsSend className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        <button>
          <GoBookmark className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        <button>
          <BsThreeDots className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        <Link to="#">
          <Avatar />
        </Link>
      </div>
    </div>
  );
};

export default Reel;
