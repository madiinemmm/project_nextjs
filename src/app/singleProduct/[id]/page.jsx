import React from 'react'
//request
const getData = async (id) => {
    const request = await fetch("https://dummyjson.com/products/" + id);
    const data = await request.json();

    return data;
}

 async function Product({params}) {
    const product = await getData(params.id);
 
  return (
    <div>
        <h3>{product.title}</h3>
        <h3>{product.description}</h3>
        <img className='w-[200] h-[200px]' src={product.images} alt="" />
        <h3>{product.price}</h3>
        <h3>{product.category}</h3>
        <h3>{product.rating}</h3>
        <h3>{product.stock}</h3>
        <h3>{product.tags}</h3>
    </div>
  )
}

export default Product