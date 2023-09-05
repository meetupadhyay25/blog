import React, { useState } from 'react'

import { close, menu } from '../assets'

const Navbar = () => {

    const [toggle, setToggle] = useState(false);
    return (
        <nav className='w-full flex py-6 justify-between items-center navbar'>
            <li className='font-poppins font-normal cursor-pointer text-[16px] text-white list-none'><a href='#home'>TechBLOG</a></li>

            <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
                <li className='font-poppins font-normal cursor-pointer text-[16px] mr-10 text-white'><a href="#home">Home</a></li>
            
                <li className='font-poppins font-normal cursor-pointer text-[16px] mr-10 text-white'><a href="#blogs">Blogs</a></li>
              
            </ul>

            <div className='sm:hidden flex flex-1 justify-end items-center'>
                <img src={toggle ? close : menu} alt="" className='w-[28px] h-[28px] object-contain' onClick={() => setToggle(!toggle)} />

                <div className={`${!toggle ? 'hidden' : 'flex'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>

                    <ul className='list-none flex justify-end items-start flex-1 flex-col'>
                        <li className='font-poppins font-normal cursor-pointer text-[16px] mb-4 text-white'><a href="#home">Home</a></li>
                        
                        <li className='font-poppins font-normal cursor-pointer text-[16px] mb-4 text-white'><a href="#blogs">Blogs</a></li>
                      
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
