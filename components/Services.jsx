import Image from 'next/image'
import { IoMdCheckmark } from "react-icons/io";
import { GoArrowUpRight } from "react-icons/go";

const serviceData =[
  {
    id: 1,
    title: 'user interface design',
  },
  {
    id: 2,
    title: 'user experience design',
  },
  {
    id: 3,
    title: 'mobile application design',
  },
]

const Services = () => {
  return (
    <section id='#services' className='py-8 mt-6 lg:max-w-[1200px] mx-auto'>
      <div className='px-2 md:px-10'>
        <h1 className='text-center font-bold text-4xl bg-gradient-to-r from-slate-100 via-gray-400 to-slate-100 bg-clip-text text-transparent'>Our Services</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 items-center px-10 mt-10'>
          <div>
            <h2 className='font-semibold text-2xl my-3'>UI/UX Design</h2>
            <p className='max-w-full md:max-w-[400px] text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus iusto necessitatibus ratione expedita corporis voluptatibus.</p>
            <ul className='flex flex-col py-6'>
              {serviceData.map((service) => (
                <li key={service.id} className='flex items-center gap-2 my-2'>
                  <IoMdCheckmark className='bg-red-600 rounded-full text-xl p-1 font-bold'/>
                  <span>{service.title}</span>
                </li>
              ))}
            </ul>
            <button className='py-3 px-4 flex gap-2 border-[1px] border-gray-400 rounded-full'>
              <span className='uppercase text-sm'>learn more</span>
              <GoArrowUpRight className='text-lg' />
            </button>
          </div>
          <div className='flex justify-start'>
            <Image src='/images/service.png' alt='hero' width={340} height={500} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services