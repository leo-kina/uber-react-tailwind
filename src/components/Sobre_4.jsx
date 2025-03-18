import React from 'react'

const Sobre_4 = () => {
  return (
    <div>
      <section className='w-full px-2 py-8 sm:py-11'>
    <div className='w-full max-w-7xl mx-auto grid  grid-cols-1 sm:grid-cols-3 gap-8'>
        <article className='flex flex-col gap-4'>
        <i class="fa-solid fa-users text-2xl"></i>
        <h2 className='font-bold text- xl'>Quem somos</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est facere, saepe sequi dolorem harum magni rerum totam iure perferendis itaque debitis culpa.</p>
        <a href="#" className='mt-3 border-b-2 self-start text-gray-600 hover:text-black hover:border-gray-400 duration-200'>
            Saiba mais sobre a Uber
        </a>
        </article>
        <article className='flex flex-col gap-4'>
        <i class="fa-solid fa-clipboard-list text-2xl"></i>
        <h2 className='font-bold text- xl'>Newsroom</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est facere, saepe sequi dolorem harum magni rerum totam iure perferendis itaque debitis culpa.</p>
        <a href="#" className='mt-3 border-b-2 self-start text-gray-600 hover:text-black hover:border-gray-400 duration-200'>
            Acesse o Newsroom
        </a>
        </article>
        
        <article className='flex flex-col gap-4'>
        <i class="fa-solid fa-house"></i>
        <h2 className='font-bold text- xl'>Cidadania global</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est facere, saepe sequi dolorem harum magni rerum totam iure perferendis itaque debitis culpa.</p>
        <a href="#" className='mt-3 border-b-2 self-start text-gray-600 hover:text-black hover:border-gray-400 duration-200'>
            Descubra sobre Cidadania global
        </a>
        </article>
        
        
    </div>
      </section>
    </div>
  )
}

export default Sobre_4
