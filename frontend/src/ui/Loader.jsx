import {HashLoader} from 'react-spinners'
const Loader = () => {
  return (
    <div className='h-full w-full flex items-center justify-center'>
        <HashLoader
  color="#15abc5"
  loading
  size={30}
  speedMultiplier={1}

/>
    </div>
  )
}

export default Loader