import React from 'react'

import { ai } from '../assets'

const Hero = () => {
    return (
        <section id='home' className='flex md:flex-row flex-col sm:px-16 px-6 sm:py-12 py-4'>
            <div className='flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-16 px-6'>
                <div className="flex flex-row justify-between items-center w-full">
                    <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
                        The Next <br className="sm:block hidden" />{" "}
                        <span className="text-gradient">Generation</span>{" "}
                    </h1>
                </div>

                <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
                    TechBlog.
                </h1>

            </div>

            <div className={`flex-1 flex  justify-center items-center md:my-0 my-10 relative`}>
                <img src={ai} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />
                <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
                <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
                <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
            </div>

        </section>
    )
}

export default Hero
