import React from 'react'
import project1 from "../../assets/project-1.png";
import project2 from "../../assets/project-2.png"
import project3 from "../../assets/project-3.png"
import project4 from "../../assets/project-3.png"

export default function 
() {

  const projects =[
    {
      id:1,
      src:project1 ,
      pname:"To-Do List"
    },
    {
      id:2,
      src:project2 ,
      pname:"Weather Application" ,
    },
    {
      id:3,
      src:project3 ,
      pname:"Quiz RESTful API (Monolithic)" ,
    },
    {
      id:4,
      src:project4 ,
      pname:"Quiz RESTful API (Microservices)" ,
    },
  ]
  return (
    <div>
    {/* <div name="projects" className='bg-gradient-to-b  from-blue-900 via-blue-900 to-gray-600 md:bg-gradient-to-b  md:from-blue-900 md:to-gray-800 w-full md:h-screen  text-gray-400'> */}
    <div name="projects" className='bg-gradient-to-b  from-blue-900 to-gray-800 w-full md:h-screen  text-gray-400'>    
      {/* removed justify center */}
      <div className='pt-28 md:pt-0 max-w-screen-lg  2xl:max-w-screen-xl p-4 flex flex-col justify-center mx-auto w-full h-full'>

       <div className='pb-8'>
        <p className='text-4xl font-bold border-b-4 border-gray-400 inline-block'>Projects</p>
        <p className='py-6'>Check out some of my work right here</p>
       </div>

      <div  className='grid sm:grid-cols-2  md:grid-cols-4 gap-8 2xl:gap-8 xl:gap-6 px-12 sm:px-0'>

       {
        projects.map( ({id,src,pname}) =>(
          <div key={id} className='  shadow-md shadow-gray-600 rounded-lg '>
          <img src={src} alt="project" className='rounded-md duration-200 hover:scale-105'/>
           <div className='flex flex-col justify-center items-center'>
            <p className='py-3 text-lg font-extrabold text-center'>{pname}</p>
            <button className='w-1/2 py-3 duration-200 hover:scale-105'>Code</button>
           </div>
         </div>
        ))
       }  
        </div>     
      </div>
    </div>
    {/* <div className='w-full h-48 bg-gradient-to-b from-gray-600 to-gray-800 text-gray-400 md:hidden'></div> */}
    </div>
  )
}
