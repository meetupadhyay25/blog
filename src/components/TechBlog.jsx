import React, { useState } from 'react'


import { blogs } from '../constant'


const TechBlog = () => {


  const [toggle, setToggle] = useState(false)

  return (
    <section id="blogs" className='md:flex-row sm:px-16 px-6'>

      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[42px] text-[22px] text-white ss:leading-[50.8px] leading-[75px]">
          A lot is happening <br className="sm:block hidden" />{" "}
          <span className="text-gradient">We are blogging about it.</span>{" "}
        </h1>
      </div>

      <div className="grid md:grid-cols-3 gap-4 sm:grid-cols-1 ss:grid-cols-1 xs:grid-cols-1 mt-10">

        {blogs.map((blog, index) => (
          <div className="max-w-sm  rounded overflow-hidden shadow-lg bg-gray-gradient" key={blog.id}>
            <img className="w-full h-[40%]" src={blog.imageUrl} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-gradient">{blog.title.slice(0, 16)}</div>
              <p className="text-white text-base">
                {blog.content.slice(0, 100)}...
                {toggle ? blog.content.slice(101,) : null}
              </p>
              <br />
              <button className='inline-block bg-pink-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2' onClick={() => setToggle(true)}>Read More</button>
              <button className='inline-block bg-pink-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-3' onClick={() => setToggle(false)}>Read Less</button>
              <br />
              <span className='inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>Managed By:- {blog.createdBy}</span>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-pink-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{blog.tags}</span>
              <span className="inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{blog.tagss}</span>
            </div>
          </div>
        ))}

      </div>
    </section>

  )

}
export default TechBlog
