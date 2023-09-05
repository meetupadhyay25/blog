import React from 'react'


import { Hero, Navbar, TechBlog } from './components'
import Footer from './components/Footer'


const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className='sm:px-16 px-6 flex justify-center items-center '>
        <div className='xl:max-w-[1280px] w-full'>
          <Navbar />
        </div>
      </div>

      <div className='bg-primary flex justify-center items-start'>
        <div className='xl:max-w-[1280px] w-full'>
          <Hero />
        </div>
      </div>

      <div className='bg-primary flex justify-center items-start sm:px-16 px-6'>
        <div className='xl:max-w-[1280px] w-full'>
          <TechBlog />
          <Footer/>
        </div>
      </div>



    </div>

  )
}

export default App
