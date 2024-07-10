import { BsThreeDotsVertical } from "react-icons/bs";
import { BiMessageRounded } from "react-icons/bi";
import { CiShare1 } from "react-icons/ci";
import { FaRegBookmark } from "react-icons/fa";
import { BsEmojiSmile } from "react-icons/bs";

import { CiHeart } from "react-icons/ci";
const Post = () => {
  return (
    <div className="max-w-[600px] w-full sm:w-[470px] space-y-1.5 mx-auto sm:space-y-3">
      <div className=" py-2 px-1.5">
        <div className="flex items-center justify-between ">
          <div className="flex items-center gap-x-2">
            <span className="flex items-center justify-center border rounded-full avatar w-14 h-14 border-zinc-600">
              ava
            </span>
            <div>
              <div>
                <span>username .</span>
                <span>createdAt</span>
              </div>
              <span className="text-sm">Original audio</span>
            </div>
          </div>
          <div className="flex items-center justify-center px-2 py-2 rounded-full menu hover:bg-zinc-900">
            <BsThreeDotsVertical />
          </div>
        </div>
      </div>
      <div className="post-wrapper h-[520px] border rounded-sm border-zinc-800 sm:border-zinc-800"></div>
      <div className="actions flex px-1.5  justify-between items-center">
        <div className="flex items-center justify-center gap-x-2.5">
          <span>
            <CiHeart className="h-7 w-7" />
          </span>
          <span>
            <BiMessageRounded className="h-7 w-7" />
          </span>
          <span>
            <CiShare1 className="h-7 w-7" />
          </span>
        </div>
        <div>
          <span>
            <FaRegBookmark className="w-6 h-6" />
          </span>
        </div>
      </div>
      <div className="stats px-1.5">
        <p className="text-lg font-semibold">4232 likes</p>
        <div>
          <p className="text-sm tracking-wide opacity-50">
            View all {"18"} comments
          </p>
        </div>
      </div>
      <p className="text-sm  px-1.5 opacity-50 flex items-center justify-between pe-1.5">
        <span>Add a comment...</span>{" "}
        <span className="opacity-50">
          <BsEmojiSmile />
        </span>
      </p>
    </div>
  );
};

export default Post;
