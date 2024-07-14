import Avatar from "../shared/Avatar";
import { BsThreeDots } from "react-icons/bs";
import { Link } from "react-router-dom";

const FeedCard = ({ image }) => {
  return (
    <Link to="">
      <div className="bg-zinc-900 px-1 py-3.5 space-y-2 border h-fit border-zinc-700 border-t-0  rounded-xl">
        <div className="px-1.5">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-x-2">
              <Avatar />
              <div>
                <h4>username</h4>
                <p className="opacity-50">location</p>
              </div>
            </div>
            <span>
              <BsThreeDots className="w-6 h-6 opacity-50 hover:opacity-100" />
            </span>
          </div>
        </div>
        <figure className=" rounded-md h-[320px] max-h-[400px] sm:rounded-[15px] ">
          <img
            src={image}
            alt="post cover photo"
            className="!h-full w-full rounded-md sm:rounded-[15px]"
          />
        </figure>

        <div className="px-1.5">
          <div className="actions flex items-center justify-between">
            <div className="space-x-1.5 *:cursor-pointer">
              <span>like</span>
              <span>comment</span>
              <span>share</span>
            </div>
            <div className="cursor-pointer">bookmark</div>
          </div>
          <div>
            <p className="space-x-1.5">
              <span className="font-semibold">3,232</span>
              <span className="opacity-50">comments</span>
            </p>
          </div>
          <p className="opacity-50 text-sm">created at</p>
        </div>
      </div>
    </Link>
  );
};

export default FeedCard;
