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
    <div>
        {products.map((product) => {
            return <div  className="   card bg-base-100 w-[350px] h-[500px] shadow-2xl">
                
            <div key={product.id} className="card-body flex flex-wrap">
           
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