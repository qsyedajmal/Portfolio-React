import React from 'react'
// import Ajmal from '../../assets/AJMAL.png'

export default function 
() {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-blue-900 text-gray-400'>
  
        {/* <main className='bg-blue-50 grid grid-cols-1 lg:flex lg:justify-around'>

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
        </main> */}

        <div className='max-w-screen-lg  2xl:max-w-screen-xl flex flex-col p-4 justify-center   w-full h-full mx-auto'>

            <div className='pb-8'>
               <p className='text-4xl font-bold border-b-4 border-gray-400 inline-block'>About</p>
            </div>

            <p className='text-2xl mt-20'> Adaptable engineer, offering extensive knowledge in Full Stack Development. </p>
            <br />
            <p className='text-2xl '>Ability to complete tasks on time in both individual and team settings. Seeking for opportunities to broaden my skills.</p> 

        </div>
        
    </div>
  )
}
