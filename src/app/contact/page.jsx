import React from 'react'
import Link from 'next/link'

function Contact() {
  return (
    <div>
       <div className="hero bg-base-200 h-[500px] mt-10 p-5">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src="https://static.vecteezy.com/system/resources/previews/002/085/191/non_2x/perfume-bottle-and-cosmetics-products-on-a-black-cloth-free-photo.jpg"
      className="h-[400px] w-[60%] object-cover rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-4xl font-bold">About <span className='text-red-700 font-semibold'>MAKE</span>UP.com!</h1>
      <p className="py-6">
      Hi! We’re so happy you stopped by. If you love all things makeup as much as we do, you’ve come to the right place. Settle in, click around and get ready to add a whole lotta inspo to your beauty mood board.
      </p>
    <Link href="/">  <button className="btn btn-primary w-[150px]">Back</button></Link>
    </div>
  </div>
</div>
       
    </div>
  )
}

export default Contact