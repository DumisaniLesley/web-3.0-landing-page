import React from 'react'

const numbersData = [
  {
    id: 1,
    title: '5M+',
    desc: 'customers'
  },
  {
    id: 2,
    title: '450M+',
    desc: 'Coverage'
  },
  {
    id: 3,
    title: '22%',
desc: 'Earnings'
  },
  {
    id: 4,
    title: '8.03%',
    desc: 'Interest'
  }
]

const Numbers = () => {
  return (
    <section id='#testimonial' className='py-8 backdrop-blur-xl bg-white/10 lg:max-w-[1200px] mx-auto'>
      <div className='px-5 md:px-16 py-4 flex justify-between'>
        {numbersData.map((number) => (
          <div key={number.id} className='flex flex-col justify-center items-start md:items-center gap-4'>
            <h1 className='text-lg md:text-4xl font-bold'>{number.title}</h1>
            <span className='text-white text-[12px] -mt-4'>{number.desc}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Numbers