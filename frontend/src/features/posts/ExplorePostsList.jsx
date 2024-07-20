import { useQuery } from "@tanstack/react-query";
import {getAllPosts} from '../../api/services/post-service'
import ExplorePostListItem from "./ExplorePostListItem";
import Loader from '../../ui/Loader'


const ExplorePostsList = () => {
    const {isLoading, data} = useQuery({
        queryKey: ['posts'],
        queryFn: getAllPosts
      })

      if(isLoading) return <Loader />

      return (

        <section className="h-auto py-1 space-y-4">
          <div className="h-full py-2 space-y-5 Feeds">
            <h2>Explore</h2>
            {/* <ul className="grid grid-cols-1 sm:grid-cols-2 sm:gap-3 gap-y-4 md:grid-cols-3 justify-items-center lg:gap-y-4 "> */}
            <ul className=" sm:columns-2 md:columns-3 2xl:columns-4 ">
              {data?.posts?.map(post => <ExplorePostListItem key={post._id} image={post?.mediaUrl} /> ) }
            </ul>
          </div>
        </section>
      );
}

export default ExplorePostsList