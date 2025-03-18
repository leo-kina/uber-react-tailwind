import React from 'react'
import post1 from '../assets/post1.png'
import post2 from '../assets/post2.png'
const Posts_Blog_3 = () => {
  return (
    <div>
      <section className='w-full px-2 py-8 sm:py-11'>
        <div className='w-full flex flex-col max-w-7xl mx-auto '>
            <h1 className=' mb-6 font-bold  text-2xl max-w-2xl sm:text-4xl'>
            Preocupados com a sua segurança, onde quer que você vá            </h1>
            <div className='w-full flex flex-col sm:flex-row gap-4'>
                <a href="#" className='flex-1'>
                    <article className='flex flex-col gap-2'>
                    <img src={post1 }
                    className='opacity-80 hover:opacity-100 hover:scale-95 duration-200'/>
                    <h2 className='text-bold text-lg'>
                    Sua segurança é a nossa prioridade                    </h2>
                    <p className='text-stone-800'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora obcaecati soluta, quod delectus quidem, esse corporis doloremque libero consequuntur dignissimos ad aperiam quos laborum. Fugit minima nisi ducimus praesentium ea!</p>
                    </article>
                </a>

                <a href="#" className='flex-1'>
                    <article className='flex flex-col gap-2'>
                    <img src={post2}
                    className='opacity-80 hover:opacity-100 hover:scale-95 duration-200'/>
                    <h2 className='text-bold  text-lg'>
                       Colocamos mais de 10.000 cidades em movimento
                    </h2>
                    <p className='text-stone-800'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora obcaecati soluta, quod delectus quidem, esse corporis doloremque libero consequuntur dignissimos ad aperiam quos laborum. Fugit minima nisi ducimus praesentium ea!</p>
                    </article>
                </a>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Posts_Blog_3
