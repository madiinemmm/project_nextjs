import React from 'react'
import Link from 'next/link';

//request

const getData = async () => {
    const request = await fetch("https://dummyjson.com/products");
    const data = request.json();

    return data;
}

async function Products() {
    const {products} = await getData();
    

   
  return (
    <div   className='grid grid-cols-3 gap-28 mt-20'>
        {products.map((product) => {
            return <div key={product.id}  className="   card bg-base-100 w-[350px] h-[800px] shadow-2xl">
                
            <div className="card-body">
             <img src={product.images} alt="" />
               <h1 className='text-2xl'>{product.title}</h1>
              <h2 className="card-title text-1xl">{product.description}</h2>
              <p>Category:{product.category}</p>
              <p>Price:{ product.price}</p>
              <p>{product.discountPercentage}</p>
              <p>Rating:{product.rating}</p>
              <div className="card-actions justify-end">
             <Link href={`singleProduct/${product.id}`}>   
             <button className="btn btn-secondary">Buy Now</button>
             </Link>
              </div>
            </div>
          </div>
        })}
    </div>
  )
}

export default Products