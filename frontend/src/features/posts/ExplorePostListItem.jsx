import PropTypes from 'prop-types'
const ExplorePostListItem = ({image}) => {
  console.log(image)
  return (
                <figure className="object-cover rounded-md mb-4 ">
                  <img
                    src={image}
                    alt=""
                    className="w-full h-full rounded-md object-cover"
                  />
                </figure>
  )
}

ExplorePostListItem.propTypes = {
  image: PropTypes.string
}

export default ExplorePostListItem