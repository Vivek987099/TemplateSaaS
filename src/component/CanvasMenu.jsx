import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { NavLink } from 'react-router'


function CanvasMenu({toggle}) {
  // Using GSAP to animate the menu appearance
       useGSAP(()=>{
      gsap.from('#menu', {
        y: 10,
        opacity: 0,
        duration: 0.2, } )
    },[toggle])
  return (
    <>
         <ul id='menu' className={` ${toggle?'flex':'hidden'} lg:hidden text-Nav  flex-col absolute right-0 top-17 shadow-xl w-40 rounded p-6 gap-x-13`}>
              <li className='block'>
                <NavLink className="hover:text-[#4a6cf7] block py-2">Home</NavLink>
              </li>
              <li className='block'>
                <NavLink className="hover:text-[#4a6cf7] block py-2">Feature</NavLink>
              </li>
              <li className='block'>
                <NavLink className="hover:text-[#4a6cf7] block py-2">Pricing</NavLink>
              </li>
              <li className='block'>
                <NavLink className="hover:text-[#4a6cf7] block py-2">Tesimonial</NavLink>
              </li>
              <li className='block'>
                <NavLink className="hover:text-[#4a6cf7] block py-2">FAQ</NavLink>
              </li>
            </ul>
    </>
  )
}

export default CanvasMenu
