import React from 'react'
import html from '../../assets/skills/html.png'
import css from '../../assets/skills/css.png'
import js from '../../assets/skills/javascript.png'
import java from '../../assets/skills/java.png'
import spring from '../../assets/skills/spring.png'
import github from '../../assets/skills/github.png'
import reactjs from '../../assets/skills/react.png'
import tailwind from '../../assets/skills/tailwind.png'
import mysql from '../../assets/skills/mysql.png'
import bootstrap from '../../assets/skills/bootstrap.png'
// import html from '../../assets/skills/'


export default function Skills
() {

  const skills =[
    {
      id:1,
      skill:html,
      title:"HTML",
      style:'shadow-orange-500'
    },
    {
      id:2,
      skill:css,
      title:"CSS",
      style:'shadow-blue-500'
    },
    {
      id:3,
      skill:js,
      title:"JavaScript",
      style:'shadow-yellow-500'
    },
    {
      id:4,
      skill:java,
      title:"Java",
      style:'shadow-cyan-500'
    },
    {
      id:5,
      skill:spring,
      title:"Spring Framework",
      style:'shadow-green-500'
    },
    {
      id:6,
      skill:reactjs,
      title:"React JS",
      style:'shadow-blue-600'
    },
    {
      id:7,
      skill:mysql,
      title:"MySQL",
      style:'shadow-amber-600'
    },
    {
      id:8,
      skill:github,
      title:"GIT HUB",
      style:'shadow-gray-400'
    },
    {
      id:9,
      skill:tailwind,
      title:"Tailwind CSS",
      style:'shadow-sky-400'
    },
    {
      id:10,
      skill:bootstrap,
      title:"Bootstrap",
      style:'shadow-purple-500'
    },
  ]
  return (
    <div>
    <div name="skills" className='w-full h-screen bg-gradient-to-b from-gray-800 to-blue-900 text-gray-400 '>
        
        <div className='max-w-screen-lg  2xl:max-w-screen-xl  flex flex-col md:justify-start pt-20 md:pt-24
        mx-auto h-full w-full p-4'>
            <div className='pb-8 '>
                <p className='text-4xl font-bold border-b-4 border-gray-400 inline-block '>Skills</p>
                <p className='py-6'>These are the technologies I'am familiar with</p>
            </div>

            <div className='w-full  grid grid-cols-2 sm:grid-cols-3 gap-8 lg:px-12 py-8 sm:px-0 text-center '>
            {skills.map(({id, skill, title, style})=>(
                         <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style} `}>
                         <img src={skill} alt="" className='w-20 mx-auto'/>
                         <p className='mt-4'>{title}</p>
                         </div>
            ))}
                         {/* <div  className="shadow-md hover:scale-105 duration-500  rounded-lg shadow-cyan-500" >
                         <img src={java} alt="" className='w-20 mx-auto'/>
                         <p className='mt-4'>ghh</p>
                         </div> */}
            </div>
        </div>



    </div>
    <div className='block w-full h-96 bg-gradient-to-b from-blue-900 to-blue-900 text-gray-400 md:hidden lg:block 2xl:hidden'></div>
    </div>
  )
}
