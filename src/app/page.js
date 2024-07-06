import React from 'react'
import Link from 'next/link'


function Home() {
  return (
 <div>
  <div>

  </div>
  <div className="carousel w-full mt-5 rounded-md">
    
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src="https://noseparis.com/media/nose/media/slider_edito_news_desktop_OurTop10RosePerfumes.gif"
      className="w-full h-[350px] object-cover rounded-sm" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src="https://i.pinimg.com/originals/14/11/7e/14117ef998291dea4bde5a4a4967702a.jpg"
      className="w-full h-[350px] object-cover rounded-sm" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src="https://i.pinimg.com/564x/9f/b1/18/9fb118d3d637cf3ac9bba3343ac52e69.jpg"
      className="w-full h-[350px] object-cover rounded-sm" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src="https://artdeco.com/cdn/shop/files/1024x450_Hotspot_Natural-Make-up_DESKTOP.jpg?v=1686777155&width=2000"
      className="w-full h-[350px] object-cover rounded-sm" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
<div className='flex flex-wrap justify-center gap-20 mt-20'>
<div className="card card-compact bg-base-100 w-[350px] shadow-xl">
  <figure>
    <img className='h-[200px] w-full object-cover'
      src="https://img.freepik.com/premium-photo/cosmetics-beauty-shoot-creative-aesthetic-social-media-promotional-posts-trendy-stylized_655090-254137.jpg"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-red-700">Powder</h2>
    <p>Cosmetics Beauty Shoot for Creative and Aesthetic Social Media Promotional Posts Trendy Stylized</p>
    <div className="card-actions justify-end">
      <button className="btn btn-secondary">Buy Now</button>
    </div>
  </div>
</div>
<div className="card card-compact bg-base-100 w-[350px] shadow-xl">
  <figure>
    <img className='h-[200px] w-full object-cover'
      src="https://media.cnn.com/api/v1/images/stellar/prod/210203182253-perfume-gucci-bloom-eau-de-parfum.jpg?q=x_0,y_0,h_956,w_1698,c_fill"
      alt="perfume" />
  </figure>
  <div className="card-body">
    <h2 className="card-title  text-red-700">Gucci</h2>
    <p>The 27 best perfumes for women that make great gifts for any occasion</p>
    <div className="card-actions justify-end">
      <button className="btn btn-secondary">Buy Now</button>
    </div>
  </div>
</div>
<div className="card card-compact bg-base-100 w-[350px] shadow-xl">
  <figure>
    <img className='h-[200px] w-full object-cover'
      src="https://parfumstock.uz/d/peony-blush-suede-jo-malone-cologne-04.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title  text-red-700">Jo Malone</h2>
    <p>Jo Malone Peony & Blush Suede Cologne, A Marvellous Woody Duo · English Pear & Freesia Diffuser · A Marvellous Fruity Duo · Lime Basil & Mandarin Body Crème </p>
    <div className="card-actions justify-end">
      <button className="btn btn-secondary">Buy Now</button>
    </div>
  </div>
</div>
<div className="card card-compact bg-base-100 w-[350px] shadow-xl">
  <figure>
    <img className='h-[200px] w-full object-cover'
      src="https://m.media-amazon.com/images/I/71UIxZyRBKL._AC_UF1000,1000_QL80_.jpg"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Lipstick</h2>
    <p>12Pcs Velvet Matte Liquid Lipstick Set,Waterproof Long Lasting Non-Stick Cup Not Fade Nude Lip Gloss Set, UP TO 24 HOURS, Professional Lip Makeup Christmas Gift Kit for Women</p>
    <div className="card-actions justify-end">
      <button className="btn btn-secondary">Buy Now</button>
    </div>
  </div>
</div>

</div>
 <div className='ml-[890px] mt-10'>
  <Link href ="/products"> <button className="btn btn-active btn-primary">For More</button></Link>
 </div>
 </div>
  )
}

export default Home