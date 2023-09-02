import React, { useState } from 'react'
import { FaBars,FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

export default function 
() {

  const [nav, setNav] = useState(false);
  
  const links =[
    {
      id: 1,
      link: 'home'
    },
    {
      id: 2,
      link: 'about'
    },
    {
      id: 3,
      link: 'projects'
    },
    {
      id: 4,
      link: 'skills'
    },
    {
      id: 5,
      link: 'contact'
    },
    // {
    //   id: 6,
    //   link: 'contact'
    // },
  ]
    
  return (
    <div className="flex justify-between items-center w-full h-20 text-white bg-gradient-to-r from-blue-900 to-gray-800 fixed px-4">

      <div>
          <h1 className="text-5xl font-signature ml-2" >Ajmal</h1>
      </div>
      
      <ul className="hidden md:flex">
      {links.map(
        ({id, link}) =><li key={id}
        className="px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-105 duration-200"
        >
        <Link to={link} smooth duration={500}>{link}</Link>
        
        </li>
      )}
      </ul>

      {/* Mobile view */}

      {/* Hamburger */}
      <div onClick={()=>setNav(!nav)} className='cursor-pointer pr-4 text-gray-400 z-10 md:hidden'>
       {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
      </div>

      {nav && (
              // Mobile List     
              <ul className="flex flex-col justify-center items-center absolute text-gray-400
              top-0 left-0 w-full h-screen bg-gradient-to-b from-blue-900 to-gray-800 ">
        
              {links.map(
                ({id, link}) =><li key={id}
                className="px-4 py-6 cursor-pointer capitalize text-3xl"
                >
                 <Link onClick={()=>setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
                </li>
              )}

              </ul> 
      )}
    
 


    </div>
  )
}

