import React from 'react'
import project1 from "../assets/project-1.png";
import project2 from "../assets/project-2.png"
import project3 from "../assets/project-3.png"
import project4 from "../assets/project-3.png"

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
    <div name="projects" className='bg-gradient-to-b  from-blue-900 to-gray-800 w-full md:h-screen  text-gray-400'>

      <div className='max-w-screen-lg  2xl:max-w-screen-xl p-4 flex flex-col justify-center mx-auto w-full h-full'>

       <div className='pb-8  items-start'>
        <p className='text-4xl font-bold border-b-4 border-gray-400 inline-block'>Projects</p>
        <p className='py-6'>Check out some of my work right here</p>
       </div>

       <div  className='grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-12 sm:px-0'>

       {
        projects.map( ({id,src,pname}) =>(
          <div key={id} className='  shadow-md shadow-gray-600 rounded-lg'>
          <img src={src} alt="project" className='rounded-md duration-200 hover:scale-105'/>
           <div className='flex flex-col justify-center items-center'>
            <p className='py-3 text-lg font-extrabold'>{pname}</p>
            <button className='w-1/2 py-3 duration-200 hover:scale-105'>Code</button>
            {/* <button></button> */}
           </div>
         </div>
        ))
       }  
        </div>

    


       
      </div>

    </div>
  )
}
