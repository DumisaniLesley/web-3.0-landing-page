import Link from 'next/link'
import { GoArrowUpRight } from "react-icons/go";

const Links = [
  {
    id: 1,
    url: '#products',
    name: 'products'
  },
  {
    id: 2,
    url: '#solutions',
    name: 'solutions'
  },
  {
    id: 3,
    url: '#customer',
    name: 'customer'
  }
  ,
  {
    id: 4,
    url: '#pricing',
    name: 'pricing'
  }
  ,
  {
    id: 5,
    url: '#resources',
    name: 'resources'
  }

]

const Navbar = () => {
  return (
    <nav className='py-4 px-10 flex justify-between items-center lg:max-w-[1200px] mx-auto text-gray-400'>
      <Link href='/'>
        <h1 className='text-3xl font-bold'>WEB 3.0</h1>
      </Link>
      <div>
        {Links.map((link) => (
          <Link 
            key={link.id} 
            href={link.url} 
            className='px-4 uppercase font-light text-md'
            >{link.name}
          </Link>
        ))}
      </div>
      <Link href='/' className='flex'>
        <span className='uppercase'>register now</span>
        <GoArrowUpRight className='text-2xl ml-1' />
      </Link>
    </nav>
  )
}

export default Navbar