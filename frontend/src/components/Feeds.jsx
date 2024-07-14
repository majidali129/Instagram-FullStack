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
          <FeedCard image="https://images.unsplash.com/photo-1720706405494-e552f264dd8d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D" />
          <FeedCard image="https://images.unsplash.com/photo-1719548170099-f7db3061420c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D" />
          <FeedCard image="https://plus.unsplash.com/premium_photo-1719596873422-20828ded1656?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D" />
          <FeedCard image="https://images.unsplash.com/photo-1720640318572-d3f3a99aa4d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8" />
          <FeedCard image="https://plus.unsplash.com/premium_photo-1661884106750-1104fb37b6b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D" />
          <FeedCard image="https://images.unsplash.com/photo-1720629949851-c866f31476bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMXx8fGVufDB8fHx8fA%3D%3D" />
        </ul>
      </div>
    </section>
  );
};

export default Feeds;
