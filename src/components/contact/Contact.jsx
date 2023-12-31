import React from 'react'

export default function 
() {
  return (
    <div>
    <div name="contact" className='w-full h-screen lg:h-[50vmax] bg-gradient-to-b from-blue-900 to-gray-800 lg:from-blue-900 lg:to-blue-900 2xl:from-blue-900 2xl:to-gray-800 text-gray-400'>
        <div className='max-w-screen-lg  2xl:max-w-screen-xl flex flex-col p-4 justify-center  w-full h-full mx-auto md:pt-[17rem] 2xl:pt-0'>
            <div className='pb-8'>
                <p className='text-4xl font-bold border-b-4 border-gray-400 inline-block '>Contact</p>
                <p className='py-6'>Get in touch with me by submitting the form below</p>
            </div>

            <div className=''>
                <form action="https://getform.io/f/c247d047-a228-482d-997e-55d63b0ea712"  className='flex flex-col mx-auto w-full md:w-1/3' method='POST'>
                    <input type="text" name="name" placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-md' />
                    <input type="email" name="email" placeholder='Enter your email' className='p-2 my-4 bg-transparent border-2 rounded-md' />
                    <textarea name="message" rows="10" placeholder='Enter your message' className='p-2 bg-transparent border-2 rounded-md'></textarea>
                    <button className='bg-gradient-to-b from-slate-800 to-slate-500 px-6  py-3 my-8 w-fit mx-auto rounded-md hover:scale-110 duration-300 text-white'>Submit</button>
                </form>
            </div>
        </div>
    </div>
    <div className='hidden lg:block 2xl:hidden w-full h-48 bg-gradient-to-b from-blue-900 to-gray-800 text-gray-800'></div>
    </div>
  )
}
