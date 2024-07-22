import ExplorePostListItem from "./ExplorePostListItem";
import Loader from '../../ui/Loader'
import { useFetchPosts } from "./useFetchPosts";


const ExplorePostsList = () => {
  const {loadingPosts, posts} = useFetchPosts()

      if(loadingPosts) return <Loader />
      return (

        <section className="h-auto py-1 space-y-4">
          <div className="h-full py-2 space-y-5 Feeds">
            <h2>Explore</h2>
            <ul className=" sm:columns-2 md:columns-3 2xl:columns-4">
              {posts?.map(post => <ExplorePostListItem key={post._id} post={post} /> ) }
            </ul>
          </div>
        </section>
      );
}

export default ExplorePostsList