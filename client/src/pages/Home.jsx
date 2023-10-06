import { AiFillDelete } from 'react-icons/ai';
import { MdOutlineEdit } from 'react-icons/md'

const Home = () => {
  return (
    <div className="mt-10">
      <div className="w-[40vw] mx-auto p-3 rounded-md shadow-md">
        <div className='flex justify-end text-lg gap-3'>
          <AiFillDelete className='text-gray-400 hover:text-red-400 cursor-pointer hover:scale-110 transition-all' />
          <MdOutlineEdit className='text-gray-400 hover:text-red-400 cursor-pointer hover:scale-110 transition-all' />
        </div>
        <h2 className='text-lg font-bold my-2'>
          Why Learn ReactJs
        </h2>
        <h3 className='text-gray-500 font-semibold'>
          The growth of React since its inception has been phenomenal. No front-end framework has grown as much as React has in such a short time.
        </h3>
      </div>
    </div>
  )
}

export default Home