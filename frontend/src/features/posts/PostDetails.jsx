import { useQuery } from "@tanstack/react-query";
import PropTypes from "prop-types";
import { useRef, useState } from "react";
import { BsEmojiSmileFill, BsFillSendFill } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import { IoMdHeart } from "react-icons/io";
import { FaBookmark, FaComment, FaRegBookmark } from "react-icons/fa";
import { formatDistance } from "date-fns";

import Avatar from "../../ui/Avatar";
import Loader from "../../ui/Loader";
import { useLikePost } from "./useLikePost";
import { useUser } from "../authentication/useUser";
import useAddBookmark from "./useAddBookmark";
import useAddComment from "./useAddComment";
import { getPost } from "../../api/services/post-service";

const PostDetails = () => {
  const [comment, setComment] = useState("");
  const { user: currentUser } = useUser();
  const { addNewComment, addingComment } = useAddComment();
  const { postId } = useParams();
  const { likeUnlikePost, likingPost } = useLikePost();
  const { savePost, savingPost } = useAddBookmark();
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const { data: post, isLoading: loadingPost } = useQuery({
    queryKey: [`post`, postId],
    queryFn: () => getPost(postId)
  });

  const handleAddComment = () => {
    if (inputRef) inputRef.current.focus();
  };
  const onSubmit = (e) => {
    e.preventDefault();
    addNewComment(
      {
        text: comment,
        postId: post._id
      },
      {
        onSettled: () => {
          setComment("");
        }
      }
    );
  };

  const totalLikes = post?.likes?.length ?? 10;
  const isLiked = currentUser?.likedPosts?.some(
    (lPost) => lPost._id === post?._id
  );
  const isSaved = currentUser?.savedPosts?.some(
    (sPost) => sPost._id === post?._id
  );

  if (loadingPost) return <Loader />;
  return (
    // <section className="grid  w-[85vw] md:w-[75vw] h-[93vh]  bg-zinc-950 grid-cols-[42%_1fr] *:w-full *:h-full">
    <section className="lg:grid  w-[100%] md:w-[95%] md:mx-auto md:h-[620px] 2xl:h-[900px] mt-3 top-4  shadow shadow-zinc-500  bg-zinc-950 lg:grid-cols-[42%_1fr]">
      <figure className="w-full h-[500px] md:h-[620px] 2xl:h-[900px] border-r border-r-zinc-800">
        <img
          src={post.mediaUrl}
          alt=""
          className="object-cover w-full h-full "
        />
      </figure>
      <div className="relative  *:border-t *:border-t-zinc-800 *:px-2 lg:*:px-4">
        {/* <div className="relative border  *:px-4"> */}
        <div className=" lg:h-20">
          <div className="flex items-center justify-between">
            <div className="grid grid-cols-[40px_1fr] md:grid-cols-[60px_1fr] py-2 gap-x-3">
              <Avatar image={post.user.avatar} />
              <div>
                <h4
                  onClick={() => navigate(`/profile/${post.user.username}`)}
                  className="cursor-pointer"
                >
                  {post?.user.username}
                </h4>
                <p>{post.caption}</p>
              </div>
            </div>
          </div>
        </div>
        <ul className=" lg:h-[calc(100%-80px-48px-80px)]">
          {post?.comments.map((comment) => (
            <div
              key={comment._id}
              // className="grid grid-cols-[15%_1fr] py-2  gap-x-3"
              className="grid grid-cols-[40px_1fr] md:grid-cols-[60px_1fr]  py-2  gap-x-3"
            >
              <Avatar image={comment.user.avatar} />
              <div>
                <div className="flex items-start gap-x-2.5">
                  <h4
                    className="text-[1.1rem] tracking-wide cursor-pointer"
                    onClick={() =>
                      navigate(`/profile/${comment.user.username}`)
                    }
                  >
                    {comment.user.username}
                  </h4>
                  <p className="opacity-90">{comment.text}</p>
                </div>
                <span className="text-sm opacity-50">
                  {formatDistance(comment.createdAt, Date.now(), {
                    addSuffix: true
                  })}
                </span>
              </div>
            </div>
          ))}
        </ul>
        <div className="left-0 flex flex-col justify-center w-full h-20 space-y-1 lg:absolute bottom-12">
          <div className="flex items-center justify-between actions">
            <div className="space-x-2.5 *:cursor-pointer flex items-center">
              <button
                disabled={likingPost}
                className="cursor-pointer"
                onClick={() => likeUnlikePost({ postId: post._id })}
              >
                {isLiked ? (
                  <IoMdHeart className="w-7 h-7 fill-red-500" />
                ) : (
                  <IoMdHeart className="w-7 h-7" />
                )}
              </button>
              <button onClick={handleAddComment}>
                <FaComment className="w-5 h-5 md:w-7 md:h-7" />
              </button>
              <button>
                <BsFillSendFill className="w-5 h-5 md:w-7 md:h-7" />
              </button>
            </div>
            <button
              disabled={savingPost}
              className="cursor-pointer"
              onClick={() => savePost({ postId: post._id })}
            >
              {/* <FaBookmark className="w-5 h-5 md:w-7 md:h-7" /> */}
              {isSaved ? (
                <FaBookmark className="w-5 h-5 md:w-7 md:h-7" />
              ) : (
                <FaRegBookmark className="w-5 h-5 md:w-7 md:h-7" />
              )}
            </button>
          </div>
          <p className="space-x-1.5">
            <span className="font-semibold">{totalLikes}</span>
            <span className="opacity-50">
              {totalLikes === 1 ? "Like" : "Likes"}
            </span>
          </p>
        </div>
        <form
          onSubmit={onSubmit}
          disabled={addingComment}
          className="bottom-0 left-0 flex items-center justify-between w-full h-12 lg:absolute gap-x-2"
        >
          <input
            type="text"
            name="comment"
            id=""
            ref={inputRef}
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
    </section>
  );
};

PostDetails.propTypes = {
  post: PropTypes.object
};

export default PostDetails;
