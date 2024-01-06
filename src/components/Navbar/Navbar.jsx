import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
    <nav className="bg-gray-800">
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span className="absolute -inset-0.5"></span>
          <span className="sr-only">Open main menu</span>
        </button>
      </div>
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div className="flex flex-shrink-0 items-center">
          <h1 className='text-2xl text-white font-semibold'>SparkSoul</h1>
        </div>
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
            <NavLink to="/" className={({isActive}) =>  `${(isActive)?'bg-gray-900 text-white':'text-gray-300 hover:bg-gray-700 hover:text-white'} rounded-md px-3 py-2 text-sm font-medium`}>Home</NavLink>
            <NavLink to="/quotes" className={({isActive}) =>  `${(isActive)?'bg-gray-900 text-white':'text-gray-300 hover:bg-gray-700 hover:text-white'} rounded-md px-3 py-2 text-sm font-medium`}>Quotes</NavLink>
            <NavLink to="/inspiration" className={({isActive}) =>  `${(isActive)?'bg-gray-900 text-white':'text-gray-300 hover:bg-gray-700 hover:text-white'} rounded-md px-3 py-2 text-sm font-medium`}>Inspiration</NavLink>
            <NavLink to="/advice" className={({isActive}) =>  `${(isActive)?'bg-gray-900 text-white':'text-gray-300 hover:bg-gray-700 hover:text-white'} rounded-md px-3 py-2 text-sm font-medium`}>Today&apos;s Advice</NavLink>
          </div>
        </div>
      </div>
      <div className='hidden sm:block'>
        <i className="fa-brands fa-github text-3xl text-gray-300 cursor-pointer hover:text-white"></i>
      </div>
    </div>
  </div>

  
  <div className="sm:hidden" id="mobile-menu">
    <div className="space-y-1 px-2 pb-3 pt-2">
      <NavLink to="/" className={({isActive}) => `text-center ${(isActive)?'bg-gray-900 text-white': 'text-gray-300 hover:bg-gray-700 hover:text-white'} block rounded-md px-3 py-2 text-base font-medium`} aria-current="page">Home</NavLink>
      <NavLink to="/quotes" className={({isActive}) => `text-center ${(isActive)?'bg-gray-900 text-white': 'text-gray-300 hover:bg-gray-700 hover:text-white'} block rounded-md px-3 py-2 text-base font-medium`}>Quotes</NavLink>
      <NavLink to="/inspiration" className={({isActive}) => `text-center ${(isActive)?'bg-gray-900 text-white': 'text-gray-300 hover:bg-gray-700 hover:text-white'} block rounded-md px-3 py-2 text-base font-medium`}>Inspiration</NavLink>
      <NavLink to="/advice" className={({isActive}) => `text-center ${(isActive)?'bg-gray-900 text-white': 'text-gray-300 hover:bg-gray-700 hover:text-white'} block rounded-md px-3 py-2 text-base font-medium`}>Today&apos;s Advice</NavLink>
    </div>
  </div>
</nav>

    </>
  )
}
