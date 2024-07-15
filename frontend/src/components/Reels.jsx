import Reel from "./Reel";
const Reels = () => {
  return (
    <div className="h-full w-full flex justify-center">
      <ul className="w-full h-full snap-y  snap-mandatory overflow-scroll space-y-2 transition-all duration-200 !scroll-my-4 scroll-p-4 ">
        <li className="snap-center ">
          <Reel video="../../public/video.mp4" />
        </li>
        <li className="snap-center ">
          <Reel video="../../public/v2.mp4" />
        </li>
        <li className="snap-center ">
          <Reel video="../../public/video.mp4" />
        </li>
        <li className="snap-center ">
          <Reel video="../../public/v2.mp4" />
        </li>
        <li className="snap-center ">
          <Reel video="../../public/video.mp4" />
        </li>
        <li className="snap-center ">
          <Reel video="../../public/v2.mp4" />
        </li>
      </ul>
    </div>
  );
};

export default Reels;
