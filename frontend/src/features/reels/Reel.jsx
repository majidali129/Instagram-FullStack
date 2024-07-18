import { FaRegHeart } from "react-icons/fa6";
import { BsSend } from "react-icons/bs";
import { BsThreeDots } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { GoBookmark } from "react-icons/go";
import { Link } from "react-router-dom";
import Avatar from "../../ui/Avatar";
import { FaMusic } from "react-icons/fa";
import { useState } from "react";
import PropTypes from 'prop-types'
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getReel, getReelComments, likeReel, saveReel, uploadReel } from "../../api/services/reels-service";

const Reel = ({ video }) => {
  const [showCaption, setShowCaption] = useState(false);
  const queryClient = useQueryClient()

  const {data, isLoading, error} = useQuery({
    queryKey: ['reel'],
    queryFn: getReel
  })
  // const {data, isLoading, error} = useQuery({
  //   queryKey: ['reel'],
  //   queryFn: getReelComments
  // })

  const {mutate, isPending} = useMutation({
    mutationKey: ['reel'],
    mutationFn: likeReel, // it need reelID
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['reel']})
      alert('Video liked successfully')
    }
  })
  // const {mutate, isPending} = useMutation({
  //   mutationKey: ['reel'],
  //   mutationFn: commentOnReel, // it need reelID
  //   onSuccess: () => {
  //     queryClient.invalidateQueries({queryKey: ['reel']})
  //     alert('comment added successfully')
  //   }
  // })
  // const {mutate, isPending} = useMutation({
  //   mutationKey: ['reel'],
  //   mutationFn: saveReel, // it need reelID
  //   onSuccess: () => {
  //     queryClient.invalidateQueries({queryKey: ['reel']})
  //     alert('reel saved successfully')
  //   }
  // })
  // const {mutate, isPending} = useMutation({
  //   mutationKey: ['reel'],
  //   mutationFn: uploadReel, // it need reelID
  //   onSuccess: () => {
  //     queryClient.invalidateQueries({queryKey: ['reel']})
  //     alert('reel uploaded successfully')
  //   }
  // })


  return (
    <div className=" relative h-full sm:w-[500px] grid sm:grid-cols-[1fr_60px] mx-auto">
      {/* VIDEO CONTAINER */}
      <div
        className="video-wrapper  relative w-full  sm:w-[82%] mx-auto
      "
      >
        {/* VIDEO */}
        <div className="w-full h-full rounded-md">
          <video className="w-full h-full rounded-md" autoPlay muted loop>
            <source src={video} type="video/mp4" />
          </video>
        </div>
        {/* VIDEO INFO */}
        <div className="absolute bottom-0 left-0 right-0 py-5 space-y-2 bg-transparent ps-4 pe-5">
          <div className="flex items-center gap-x-2.5">
            <Avatar />
            <span className="font-semibold">username</span>
            <Link
              to="#"
              className="px-2 py-1 bg-transparent border rounded-sm border-zinc-300"
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


Reel.propTypes = {
  video: PropTypes.string
}
export default Reel;
