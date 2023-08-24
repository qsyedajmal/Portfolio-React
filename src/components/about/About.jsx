import React from 'react'
import Ajmal from '../../assets/AJMAL.png'

export default function 
() {
  return (
    <div>
        {/* <main className='bg-blue-50 flex justify-around'> */}
        <main className='bg-blue-50 grid grid-cols-1 lg:flex lg:justify-around'>

            <div className='py-40 lg:pl-9 '>
                <div className='text-6xl font-bold text-blue-900'>
                    ABOUT ME
                </div>
                <div className='mt-16 text-2xl'>
                Adaptable engineer, offering extensive knowledge in Java , Html, CSS. <br/><br/>
                Ability to complete tasks on time in both individual and team settings. Seeking for opportunities to broaden my skills.                
                </div>
             </div>
            <div className='flex items-center place-content-center'>
                <img src={Ajmal} className='h-80 sm:h-96 md:h-[32rem] lg:h-80 rounded-3xl border-black border-2'/>
            </div>
        </main>

        
        <hr/>
    </div>
  )
}
