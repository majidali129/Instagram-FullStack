import { FaComment } from "react-icons/fa"
import { IoMdHeart } from "react-icons/io"
import PropTypes from 'prop-types'

const PostOverlay = ({comments, likes}) => {
  return (
<div className="absolute w-full h-full top-0 flex rounded-md items-center justify-center backdrop-blur-[2px] transition-all duration-150 ease-in-out opacity-0 group-hover:opacity-100">
                    <div className="flex items-center gap-x-6 *:flex *:items-center  *:gap-x-1">
                      <div><IoMdHeart className='w-8 h-8' /> <span className='font-bold'>{likes}</span></div>
                      <div><FaComment className='w-8 h-8' /> <span className='font-bold'>{comments}</span></div>
                    </div>
                  </div>
  )
}

PostOverlay.propTypes = {
    comments: PropTypes.number,
    likes: PropTypes.number
}
export default PostOverlay