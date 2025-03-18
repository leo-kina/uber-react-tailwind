import React from 'react'
import uber from '../assets/bguber.png'	

const Content_1 = () => {
  return (
    <div className='w-full uber-bg bg-cover bg-no-repeat bg-left sm:py-10' style={{backgroundImage: `url(${uber})`}}>
        
    <div className='w-full max-w-7xl mx-auto flex'>
        <section className='bg-white max-w-lg w-full md:mx-2 md:my-2'>
            <div className='flex bg-slate-100 justify-between items-center'> 
        <section className='flex-1 pt-3 flex flex-col items-center justify-center gap-2'>
        <i class="fa-solid fa-signal text-3xl"></i>
        <span className='text-center font-medium'>Faça viagens ou entregas</span>
        <span className='w-full bg-black h-[1.5px]'></span>
        
        </section>
        <section className='flex-1 pt-3 flex flex-col items-center justify-center gap-2'>
        <i class="fa-solid fa-key text-3xl"></i>
        <span className='text-center font-medium'>Viajar</span>
        
        
        </section>
        <section className='flex-1 pt-3 flex flex-col items-center justify-center gap-2'>
        <i class="fa-solid fa-car text-3xl"></i>
        <span className='text-center font-medium'>Alugue seus carros</span>
        
        
        </section>
        </div>
        <div className='flex flex-col gap-5 px-4 my-4'>
    <h1 className='font-bold text-4xl  max-w-sm'>Assuma o comando e ganha</h1>
    <p className='max-w-sm'>Dirija na plataforma com a maior rede de usuários ativos.</p>
    <button className='bg-black self-satrt text-white px-6 py-2 roundend-lg font-medium hover:scale-105 duration-200 cursor-pointer'>Cadastra-se para dirigir</button>
    <a href="#" className='text-gray-700 mt-7 mb-4 border-b-2 self-start border-slate-300 hover:border-slate-700  duration-300'>
        Saiba mais sobre como dirigir e fazer entregas
    </a>
    
        </div>
        </section>
    </div>
    </div>
  )
}

        
export default Content_1
