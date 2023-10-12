import React from 'react'
import Ajmal from '../../assets/AJMAL.png'
import { IoMdDownload } from "react-icons/io";
import Resume from '../../assets/resume/SYED_AJMAL_RESUME.pdf'

// import { MdOutlineKeyboardArrowRight } from "react-icons/md";
export default function 
() {
  return (
    <div name="home" className='h-screen lg:h-[50vmax] w-full bg-gradient-to-b from-blue-900 to-gray-800 '>

        <div className='max-w-screen-lg  2xl:max-w-screen-xl  flex flex-col justify-center items-center md:flex-row
        mx-auto h-full'>

          <div className=' text-gray-400 flex flex-col justify-center h-full '>
            <h2 className='px-4 text-4xl md:text-4xl  lg:text-6xl 2xl:text-7xl font-bold text-white'>Full Stack Developer</h2>
            <p className='px-4 py-4 max-w-md'>Adaptable engineer, offering extensive knowledge in Full Stack Development. 
              Ability to complete tasks on time in both individual and team settings. Seeking for opportunities to broaden my skills.
            </p> 
            {/* <button className='bg-gradient-to-b from-slate-800 to-slate-500 px-6 py-3  mx-auto lg:mx-3 lg:w-52 rounded-md hover:scale-110 duration-300 text-white'>Download Resume
            <span><IoMdDownload/></span></button> */}
            <a className='bg-gradient-to-b from-slate-800 to-slate-500 px-6 py-3 w-fit mx-auto md:mx-3 rounded-md  text-white flex items-center' href={Resume} download>Download Resume
            <span><IoMdDownload size={20} className='ml-2'/></span></a>
          </div>

          <div>
            <img src={Ajmal} alt="" className='rounded-2xl mx-auto  w-2/3  md:ml-0 md:w-36 lg:ml-28 lg:w-52 2xl:w-64' />
          </div>

        </div>
    </div>
  )
}
