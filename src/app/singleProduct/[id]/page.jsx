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
    </div>
  )
}

export default Product