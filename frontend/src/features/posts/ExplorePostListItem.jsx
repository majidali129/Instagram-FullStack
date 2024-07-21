import PropTypes from 'prop-types'
import { FaComment } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";

const ExplorePostListItem = ({image}) => {
  return (
                <figure className="object-cover rounded-md mb-4 relative group">
                  <img
                    src={image}
                    alt=""
                    className="w-full h-full rounded-md object-cover"
                  />
                  <div className="absolute w-full h-full top-0 flex rounded-md items-center justify-center backdrop-blur-[2px] transition-all duration-150 ease-in-out opacity-0 group-hover:opacity-100">
                    <div className="flex items-center gap-x-6 *:flex *:items-center  *:gap-x-1">
                      <div><IoMdHeart className='h-8 w-8' /> <span className='font-bold'>2323</span></div>
                      <div><FaComment className='h-8 w-8' /> <span className='font-bold'>2323</span></div>
                    </div>
                  </div>
                </figure>
  )
}

ExplorePostListItem.propTypes = {
  image: PropTypes.string
}

export default ExplorePostListItem