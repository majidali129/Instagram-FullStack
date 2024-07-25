import Stories from "../../ui/Stories";
import { FaPlayCircle } from "react-icons/fa";
import Loader from "../../ui/Loader";
import FeedItem from "./FeedItem";
import { useFetchPosts } from "./useFetchPosts";

const FeedsList = () => {
  const { loadingPosts, posts } = useFetchPosts();
  if (loadingPosts) return <Loader />;
  return (
    <section className="h-auto py-1 space-y-4">
      <div className="hidden space-y-5 stories">
        <div className="flex items-center justify-between">
          <h2>Stories</h2>
          <div className="flex items-center opacity-50 gap-x-2">
            <span>
              <FaPlayCircle />
            </span>
            <span>Watch all</span>
          </div>
        </div>
        <Stories />
      </div>
      {/* FEEDS LIST */}
      <div className="h-full py-3 space-y-3">
        <h2>Feeds</h2>
        <ul className="grid h-full gap-4 pb-2 lg:grid-cols-3 md:grid-cols-2">
          {posts?.map((feed) => (
            <FeedItem key={feed._id} data={feed} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FeedsList;
