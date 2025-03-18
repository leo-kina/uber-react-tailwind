import React from 'react'
import city from '../assets/bg-city.png'	

const Hero_2 = () => {
  return (
    <div>
      <section className='w-full py-11 bg-city bg-no-repeat bg-cover bg-right px-2'style={{backgroundImage: `url(${city})`}}>
        <div className='w-full max-w-7xl mx-auto flex flex-col gap-5'>
            <h1 className='text-3xl lg:text-4xl font-bold w-full max-w-2xl'>
                A plataforma Uber que voce conhece , reiventadas para empresas 
            </h1>
            <p className='font-medium text-sm max-w-2xl md:text-base'>
            Uma plataforma simples para empresas de todos os portes administrarem suas viagens e refeições globais e entregas locais
            </p>
            <button className='bg-black self-start text-white px-6 py-2 rounded-lg hover:scale-105 duration-200 font-mediums'>Começar</button>
            
        </div>
      </section>
    </div>
  )
}

export default Hero_2
