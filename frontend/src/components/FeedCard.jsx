import Avatar from "../shared/Avatar";
import { BsEmojiSmileFill, BsThreeDots } from "react-icons/bs";
import { FaComment } from "react-icons/fa";
import { IoIosBookmark, IoMdHeart } from "react-icons/io";
import { BsFillSendFill } from "react-icons/bs";

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

        <div className="px-1.5 space-y-2">
          <div className="actions flex items-center justify-between">
            <div className="space-x-1.5 *:cursor-pointer flex items-center">
              <span>
                <IoMdHeart />
              </span>
              <span>
                <FaComment />
              </span>
              <span>
                <BsFillSendFill />
              </span>
            </div>
            <div className="cursor-pointer">
              <IoIosBookmark />
            </div>
          </div>
          <div>
            <p className="space-x-1.5">
              <span className="font-semibold">332</span>
              <span className="opacity-50">Likes</span>
            </p>
            <p className="space-x-1.5">
              <span className="font-semibold">username</span>
              <span className="opacity-50">Lorem ipsum dolor sit amet.</span>
            </p>
            <p className="space-x-1.5">
              <span className="opacity-50"> view all {40} comments</span>
            </p>
          </div>
          <form className="flex items-center justify-between gap-x-2 w-full ">
            <input
              type="text"
              name="comment"
              id=""
              className="bg-inherit w-full py-2 px-1.5 placeholder:opacity-50 outline-none border-none"
              placeholder="Add a comment..."
            />
            <span className="opacity-50">
              <BsEmojiSmileFill />
            </span>
          </form>
        </div>
      </div>
    </Link>
  );
};

export default FeedCard;
