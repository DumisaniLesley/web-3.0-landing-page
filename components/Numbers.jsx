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
    <section id='#testimonial' className='py-8 bg-gray-500'>
      <div className='px-16 flex justify-between'>
        {numbersData.map((number) => (
          <div key={number.id} className='flex flex-col justify-center items-center gap-4'>
            <h1 className='text-4xl font-bold'>{number.title}</h1>
            <span className='text-white -mt-4'>{number.desc}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Numbers