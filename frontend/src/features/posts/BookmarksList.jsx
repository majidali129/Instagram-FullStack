import PostOverlay from "../../ui/PostOverlay";
import { useOutletContext } from "react-router-dom";

const BookMarkList = () => {
  const [{savedPosts}] = useOutletContext()
  return (
    <ul className="grid gap-2 py-2 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 max-sm:gap-y-2">
      {
        savedPosts && savedPosts?.map(post => <figure key={post._id} className=" rounded *:rounded max-h-[345px] h-[345px] relative group">
          <img src={post.mediaUrl} alt="saved post image" className="object-cover w-full h-full" />
          <PostOverlay comments={post?.comments?.length}  likes={post?.likes?.length}/>
        </figure>)
      }
    </ul>
  );
};

export default BookMarkList;
