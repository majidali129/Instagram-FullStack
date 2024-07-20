import PropTypes from 'prop-types'

const Avatar = ({image}) => {
  return (
    <figure className="w-10 h-10 rounded-full cursor-pointer sm:w-12 sm:h-12 border-slate-400">
      <img src={image} alt="user profile phote" className='object-cover w-full h-full rounded-full' />
    </figure>
  );
};

Avatar.propTypes = {
  image: PropTypes.string
}
export default Avatar;
