import React from "react";

const CategoryProduct = ({ product, setBuyMobile, handleReport }) => {
  const {
    productName,
    picture,
    address,
    year,
    buyingPrice,
    sellingPrice,
    sellerName,
    condition,
    phone,
    about,
    postTime,
  } = product;
  //console.log(product);
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={picture} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-3xl text-green-900 font-bold">
          {productName}
        </h2>
        <h2>{about}</h2>
        <div className="flex justify-between mt-3">
          <h2 className="card-title">Original price:{buyingPrice}$</h2>
          <h2 className="card-title">Sell:{sellingPrice}$</h2>
        </div>
        <h2 className="card-title">use: {year}year</h2>
        <h2 className="card-title">condition: {condition}</h2>
        <p className="text-green-500 mt-2 mb-2">Location: {address}</p>
        <div className="card-actions justify-end">
          <p>
            {" "}
            <small>SellerName : {sellerName}</small>{" "}
          </p>
          <p>
            {" "}
            <small>Mobile : {phone}</small>{" "}
          </p>
          <p>
            {" "}
            <small>Post Time : {postTime}</small>{" "}
          </p>

          <label
            htmlFor="booking-modal"
            className="btn btn-success mt-2"
            onClick={() => setBuyMobile(product)}
          >
            Purchase
          </label>

          <button onClick={()=>handleReport(product._id)} className="bg-red-400 px-5 py-3 rounded-lg font-bold hover:bg-red-600 w-full text-white">
            Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryProduct;
