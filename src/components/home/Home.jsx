import React from 'react'
import Ajmal from '../../assets/AJMAL.png'
// import { MdOutlineKeyboardArrowRight } from "react-icons/md";
export default function 
() {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-blue-900 to-gray-800 '>
        {/* <main className='bg-blue-50 flex justify-start'>
            <div>
            
             <div className="text-6xl pl-10 py-10 ">JAVA WEB DEVELOPER</div>
                <div className="text-6xl ml-32 pt-24">JAVA WEB DEVELOPER</div>
                <div className="text-6xl ml-32 pt-10">Hello Iam Q SYED AJMAL</div>
                <MdOutlineKeyboardArrowRight/>
            </div>
        </main> */}
        <div className='max-w-screen-lg  2xl:max-w-screen-xl  flex flex-col justify-center items-center md:flex-row
        mx-auto h-full'>

          <div className=' text-gray-400 flex flex-col justify-center h-full '>
            <h2 className='px-4 text-4xl md:text-4xl  lg:text-6xl 2xl:text-7xl font-bold text-white'>Full Stack Developer</h2>
            <p className='px-4 py-4 max-w-md'>Adaptable engineer, offering extensive knowledge in Full Stack Development. 
              Ability to complete tasks on time in both individual and team settings. Seeking for opportunities to broaden my skills.
            </p> 
          </div>

          <div>
            <img src={Ajmal} alt="" className='rounded-2xl mx-auto  w-2/3  md:ml-0 md:w-36 lg:ml-28 lg:w-52 2xl:w-64' />
          </div>

        </div>
    </div>
  )
}
