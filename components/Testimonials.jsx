import Image from 'next/image'
import { FaStar } from "react-icons/fa";
import { GoDash } from "react-icons/go";

const testimonialsData = [
  {
    id: 1,
    name: 'Kenny Zulu',
    image: '/images/user.jpg',
    emoji: '/emojis/care.png',
    title: 'CEO of ABC Inc',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec turpis at nunc posuere tincidunt. Proin nec ex eget libero fermentum varius',
  },
  {
    id: 2,
    name: 'Morris Kangwa',
    image: '/images/user.jpg',
    emoji: '/emojis/care.png',
    title: 'CEO of ABC Inc',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec turpis at nunc posuere tincidunt. Proin nec ex eget libero fermentum varius',
  },
  {
    id: 3,
    name: 'Alex Mwamba',
    image: '/images/user.jpg',
    emoji: '/emojis/care.png',
    title: 'CEO of ABC Inc',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec turpis at nunc posuere tincidunt. Proin nec ex eget libero fermentum varius',
  },
]

const Testimonials = () => {
  return (
    <div className='py-8 px-10 mt-6 lg:max-w-[1200px] mx-auto'>
      <div>
        <h1 className='text-center'>Our Happy Customers</h1>
      </div>
      <div className='flex gap-4 '>
        {testimonialsData.map((testimonial) => (
          <div className='relative w-[250px] mt-10 bg-white/10 backdrop-blur-xl py-4 px-4 rounded-xl' key={testimonial.id}>
            <div className='flex justify-center items-center px-2 py-1 rounded-full gap-2 bg-black absolute -top-4 right-[35%]'>
              <Image src={testimonial.image} width={30} height={30} alt='image' className='rounded-full aspect-square'/>
              <Image src={testimonial.emoji} width={30} height={30} alt='image' className='rounded-full aspect-square'/>
            </div>
            <div className='flex gap-1 my-2'>
              <FaStar className='text-yellow-400 text-[10px]' />
              <FaStar className='text-yellow-400 text-[10px]' />
              <FaStar className='text-yellow-400 text-[10px]' />
              <FaStar className='text-yellow-400 text-[10px]' />
              <FaStar className='text-yellow-400 text-[10px]' />
            </div>
            <p className='text-[10px]'>{testimonial.desc}</p>
            <div className='mt-4'>
              <h4 className='text-[13px] font-bold'>{testimonial.name}</h4>
              <p className='text-[8px]'>{testimonial.title}</p>
            </div>
          </div>
         ))}
      </div>
      <div className='flex justify-center mt-4'>
        <GoDash className='text-5xl'/>
        <GoDash className='text-5xl'/>
        <GoDash className='text-5xl'/>
        <GoDash className='text-5xl'/>
      </div>
    </div>
  )
}

export default Testimonials