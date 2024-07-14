import FeedCard from "./FeedCard";
import Stories from "./Stories";
import { FaPlayCircle } from "react-icons/fa";

const Feeds = () => {
  return (
    <section className="space-y-4  h-auto py-1">
      <div className="stories space-y-5">
        <div className="flex justify-between items-center">
          <h3>Stories</h3>
          <div className="opacity-50 flex items-center gap-x-2">
            <span>
              <FaPlayCircle />
            </span>
            <span>Watch all</span>
          </div>
        </div>
        <Stories />
      </div>
      {/* FEEDS LIST */}
      <div className="Feeds space-y-3 py-2 h-full">
        <div className="flex justify-between items-center">
          <h3>Feeds</h3>
          <div className="flex items-center gap-x-2">
            <span className="opacity-100">Popular</span>
            <span className="opacity-50">Latest</span>
          </div>
        </div>
        <ul
          className="grid grid-cols-1  sm:grid-cols-3
         h-full gap-4 pb-2 "
        >
          <FeedCard image="https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=600" />
          <FeedCard image="https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=600" />
          <FeedCard image="https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=600" />
        </ul>
      </div>
    </section>
  );
};

export default Feeds;
