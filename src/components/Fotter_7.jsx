import React from 'react'
import uber from '../assets/uberlogo.png'	
import playstore from '../assets/playstore.png'
import appstore from '../assets/lojapple.png'
const Fotter_7 = () => {
  return (
    <div>
      <section className='bg-black w-full px-2 py-8'>
        <div className='w-full py-5 max-w-7xl mx-auto flex flex-col items-center gap-3 justify-center'>
            <div>
            <img src={uber}  className='w-14' />
            </div>
            <div className=''> 
                <p className='text-white'>©2023 Leonardo Kina</p>
            </div>
            <div className='flex gap-2' >
            <img src={appstore} className='w-25 h-8'/>
                <img src={playstore} 
                className='w-25 h-8'/>
          
            </div>

        </div>
      </section>
    </div>
  )
}

export default Fotter_7
