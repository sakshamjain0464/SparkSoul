import React from 'react'

export default function Footer() {
  return (
    <footer className='w-full bg-gray-800 absolute bottom-0 flex py-2 px-10 flex-col sm:flex-row items-center'>
        <div className="w-full text-center justify-center text-gray-300 tracking-widest sm:w-1/2 sm:justify-start sm:text-left">
            <p>Created By Saksham Jain</p>
        </div>
        <div className="justify-center w-full flex sm:w-1/2 sm:justify-end">
            <a href=""><i className="fa-brands fa-github text-xl text-gray-300 cursor-pointer mx-3 hover:text-white"></i></a>
            <a href=""><i className="fa-brands fa-linkedin text-xl text-gray-300 cursor-pointer mx-3 hover:text-white"></i></a>
            <a href=""><i className="fa-brands fa-instagram text-xl text-gray-300 cursor-pointer mx-3 hover:text-white"></i></a>
            <a href=""><i className="fa-solid fa-code text-xl text-gray-300 cursor-pointer mx-3 hover:text-white"></i></a>
        </div>
    </footer>
  )
}
