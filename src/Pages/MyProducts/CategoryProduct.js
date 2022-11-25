import React from 'react';


const CategoryProduct = ({product,setBuyMobile}) => {
  const {name,picture,address,Using,
    originalPrice,
    SellingPrice,
  sellerName,
postTime} = product;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
    <figure><img src={picture} alt="Shoes" /></figure>
    <div className="card-body">
      <h2 className="card-title text-3xl text-green-900 font-bold">{name}</h2>
     <div className='flex justify-between mt-3'>
     <h2 className="card-title">Original price:{originalPrice}</h2>
      <h2 className="card-title">Sell:{SellingPrice}</h2>
     </div>
      <h2 className="card-title">use: {Using}years</h2>
      <p className='text-green-500 mt-2 mb-2'>Location: {address}</p>
      <div className="card-actions justify-end">
        <p> <small>SellerName :  {sellerName}</small> </p>
        <p> <small>Post Time :  {postTime}</small> </p>
        
        <label htmlFor="booking-modal"
         className="btn btn-success mt-2"
         onClick={()=>setBuyMobile(product)}
         >Purchase</label>
      </div>
    </div>
  
  </div>    
  );
};

export default CategoryProduct;