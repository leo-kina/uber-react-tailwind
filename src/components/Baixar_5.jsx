import React from 'react'
import qrcode1 from '../assets/qrcode1.png'	
import qrcode2 from '../assets/qrcode2.png'
const Baixar_5 = () => {
  return (
    <div>
      <section className='bg-gray-300 w-full px-2 py-8 '>
    <div className='w-full max-w-7xl mx-auto flex flex-col gap-4'>  
    <h2 className='font-bold text-2xl md:text-4xl'>É mais facil pelo app</h2>
    <div className='flex flex-col w-full gap-6 md:flex-row'>
        <a href="#"
        className='flex w-full border-2 items-center hover:shadow-lg duration-200 justify-between border-slate-300 px-4 py-6 bg-white'>
            <div className='flex items-center'>
<img src={qrcode1} 
className='hidden md:flex mr-4 w-1/3' />

<div>
    <h3 className='font-bold text-xl'>Baixe o app da Uber</h3>
    <span className='hidden md:block'>Leia o codigo QR para baixar o app</span>
</div>
</div>

        </a>
        <a href="#"
        className='flex w-full border-2 items-center hover:shadow-lg duration-200 justify-between border-slate-300 px-4 py-6 bg-white'>
            <div className='flex items-center'>
<img src={qrcode2} 
className='hidden md:flex mr-4 w-1/3' />

<div>
    <h3 className='font-bold text-xl'>Baixe o app de parceiro</h3>
    <span className='hidden md:block'>Leia o codigo QR para baixar o app</span>
</div>
</div>
<i class="fa-solid fa-chevron-right text-xl hover:scale-110 duration-200"></i>
        </a>
        
    </div>
    </div>
      </section>
    </div>
  )
}

export default Baixar_5
