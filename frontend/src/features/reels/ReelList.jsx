// import { getReels } from "../../api/services/reels-service";
import Reel from "./Reel";
// import { useQuery } from "@tanstack/react-query";
const ReelList = () => {
  // const { data, isLoading, error } = useQuery({
  //   queryKey: ["reels"],
  //   queryFn: getReels
  // });
  return (
    <div className="flex justify-center w-full h-full">
      <ul className="w-full h-full snap-y  snap-mandatory overflow-scroll reels space-y-2 transition-all duration-200 !scroll-my-4 scroll-p-4 ">
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

export default ReelList;
