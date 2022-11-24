import React from 'react';


const CategoryProduct = ({product,setBuyMobile}) => {
  const {name,picture,address,Using,
    originalPrice,
    SellingPrice} = product;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
    <figure><img src={picture} alt="Shoes" /></figure>
    <div className="card-body">
      <h2 className="card-title">{name}</h2>
     <div className='flex justify-between'>
     <h2 className="card-title">Original price:{originalPrice}</h2>
      <h2 className="card-title">Sell:{SellingPrice}</h2>
     </div>
      <h2 className="card-title">use: {Using}years</h2>
      <p>Location: {address}</p>
      <div className="card-actions justify-end">
        
        <label htmlFor="booking-modal"
         className="btn btn-success"
         onClick={()=>setBuyMobile(product)}
         >Purchase</label>
      </div>
    </div>
  
  </div>    
  );
};

export default CategoryProduct;