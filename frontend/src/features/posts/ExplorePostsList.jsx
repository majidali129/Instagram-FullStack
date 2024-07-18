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
      console.log(data.posts)

      return (

        <section className="h-auto py-1 space-y-4">
          <div className="h-full py-2 space-y-5 Feeds">
            <h2>Explore</h2>
            {/* <ul className="grid grid-cols-1 sm:grid-cols-2 sm:gap-3 gap-y-4 md:grid-cols-3 justify-items-center lg:gap-y-4 "> */}
            <ul className=" sm:columns-2 md:columns-3 2xl:columns-4 *:mb-4 ">
              {/* {[1, 2, 3, 4, 5, 6, 7, 8].map((el) => ( */}
              <li>
                <figure className="object-cover rounded-md ">
                  <img
                    src="https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                    className="w-full h-full rounded-md"
                  />
                </figure>
              </li>
              <ExplorePostListItem />
              <li>
                <figure className="rounded-md object- ">
                  <img
                    src="https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                    className="w-full h-full rounded-md"
                  />
                </figure>
              </li>
              <li>
                <figure className="rounded-md object- ">
                  <img
                    src="https://images.pexels.com/photos/1657332/pexels-photo-1657332.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                    className="w-full h-full rounded-md"
                  />
                </figure>
              </li>
              <li>
                <figure className="rounded-md object- ">
                  <img
                    src="https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                    className="w-full h-full rounded-md"
                  />
                </figure>
              </li>
              {/* ))} */}
            </ul>
          </div>
        </section>
      );
}

export default ExplorePostsList