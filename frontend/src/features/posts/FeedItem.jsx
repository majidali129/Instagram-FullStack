import Avatar from "../../ui/Avatar";
import { BsEmojiSmileFill, BsThreeDots } from "react-icons/bs";
import { FaComment, FaBookmark } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";
import { BsFillSendFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
import { useState } from "react";
import { useUser } from "../authentication/useGetCurrentUser";
import { useLikePost } from "./useLikePost";
import useAddComment from "./useAddComment";
import useAddBookmark from "./useAddBookmark";

const FeedItem = ({data}) => {
  const [showCaption, setShowCaption] = useState(false)
  const [comment, setComment] = useState('')
  const {caption, mediaUrl, comments, likes,_id: postId, user} = data;
  const {user: currentUser} = useUser()
  const {likeUnlikePost, likingPost} = useLikePost()
  const {addNewComment, addingComment} = useAddComment()
  const {savePost, savingPost} = useAddBookmark()
  const totalLikes = likes?.length,
  totalComments = comments?.length;



  const onSubmit = (e) => {
    e.preventDefault()
    addNewComment({
      text: comment,
      postId,
    }, {
      onSettled: () => {
        setComment('')
      }
    })
  }


  const isAlreadyLiked = currentUser?.likedPosts?.includes(postId)
  const isAlreadySaved = currentUser?.savedPosts?.includes(postId)

  return (
      <div className="bg-zinc-900 px-1 py-0 pt-5 space-y-2.5 border h-[685px] lg:h-[700px] border-zinc-700 border-t-0  rounded-xl">
        <div className="px-1.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-2">
              <Avatar image={user?.avatar} />
              <div>
                <Link to={`profile/${user?.username}`}>
                <span>{user?.username}</span>
                </Link>
                <p className="opacity-50">location</p>
              </div>
            </div>
            <span>
              <BsThreeDots className="w-6 h-6 opacity-50 hover:opacity-100" />
            </span>
          </div>
        </div>

        <figure className=" rounded-md  sm:rounded-[10px] h-[430px] ">
          {/* <figure className=" rounded-md h-[320px] max-h-[400px] sm:rounded-[15px] "> */}
          <img
            src={mediaUrl}
            alt="post cover photo"
            className="!h-full w-full rounded-md sm:rounded-[10px] object-cover aspect-video"
          />
        </figure>

        <div className="px-1.5 py-1 space-y-2">
          <div className="flex items-center justify-between actions">
            <div className="space-x-2.5 *:cursor-pointer flex items-center">
              <button disabled={likingPost} onClick={() => likeUnlikePost({postId})} >
                {isAlreadyLiked? <IoMdHeart className="w-5 h-5 fill-red-500" />: <IoMdHeart className="w-5 h-5" />}

              </button>
              <button>
                <FaComment className="w-5 h-5" />
              </button>
              <button>
                <BsFillSendFill className="w-5 h-5" />
              </button>
            </div>
            <button disabled={savingPost} className="cursor-pointer" onClick={() => savePost({postId})}>
              {/* <FaBookmark className="w-5 h-5" /> */}
              {isAlreadySaved? <FaBookmark className="w-5 h-5" />: <FaRegBookmark className="w-5 h-5" />}
            </button>
          </div>
          <div className="space-y-1">
            <p className="space-x-1.5">
              <span className="font-semibold">{totalLikes}</span>
              <span className="opacity-50">{totalLikes===1? 'Like': 'Likes'}</span>
            </p>
            <p className="space-x-1.5 flex items-start" >
              <Link to={`profile/${user?.username}`}><span>{user.username}</span></Link>
              {
              caption && <p className="cursor-pointer" onClick={() => setShowCaption(!showCaption)}>
                <span className={` opacity-50 text-sm flex px-1 flex-wrap ${showCaption? 'line-clamp-none cursor-pointer max-h-11 bg-zinc-950 overflow-y-scroll': '!line-clamp-1'}`}>{caption}</span>
                </p>
              }
            </p>
            <p className="space-x-1.5 ">
              {totalComments === 1 && <span className="opacity-50"> {comments[0].text} </span>}
              {totalComments > 1 && <span className="opacity-50 cursor-pointer" > view all {totalComments} comments</span>}
              {!totalComments &&<span className="opacity-50">Add a comment</span>}
            </p>
          </div>
          <form onSubmit={onSubmit} disabled={addingComment} className="flex items-center justify-between w-full gap-x-2 ">
            <input
              type="text"
              name="comment"
              id=""
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="bg-inherit w-full py-2 px-1.5 placeholder:opacity-50 outline-none border-none"
              placeholder="Add a comment..."
            />
            <span className="opacity-50">
              <BsEmojiSmileFill />
            </span>
          </form>
        </div>
      </div>
  )
}

FeedItem.propTypes = {
    data: PropTypes.object
}
export default FeedItem