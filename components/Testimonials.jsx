import Image from 'next/image'
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  return (
    <div className='py-8 px-10 mt-6 lg:max-w-[1200px] mx-auto'>
      <div>
        <h1 className='text-center'>Our Happy Customers</h1>
      </div>
      <div>
        <div className='w-[300px] mt-10 bg-white/10 backdrop-blur-xl py-2 px-4 rounded-xl'>
          <div className='flex justify-center items-center gap-2'>
            <Image src='/images/user.jpg' width={30} height={30} alt='image' className='rounded-full aspect-square'/>
            <Image src='/emojis/care.png' width={30} height={30} alt='image' className='rounded-full aspect-square'/>
          </div>
          <div className='flex gap-1 my-1'>
            <FaStar className='text-yellow-400 text-sm' />
            <FaStar className='text-yellow-400 text-sm' />
            <FaStar className='text-yellow-400 text-sm' />
            <FaStar className='text-yellow-400 text-sm' />
            <FaStar className='text-yellow-400 text-sm' />
          </div>
          <p className='text-[10px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.Inventore,dolor Inventore,dolor sit amet cons ectetur adipisicing elit. Inventore sed?</p>
          <div className='mt-4'>
            <h4>Name</h4>
            <p className='text-sm'>Founder of Roblox</p>
          </div>
        </div>
      </div>
      <div>
        ----
      </div>
    </div>
  )
}

export default Testimonials