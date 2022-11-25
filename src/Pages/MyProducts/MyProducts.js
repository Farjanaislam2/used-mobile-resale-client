import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CategoryProduct from "./CategoryProduct";
import BookingModal from './BookingModal/BookingModal';

const MyProducts = () => {
  const products = useLoaderData();
  const [buyMobile, setBuyMobile] = useState(null);

  return (
   <section>
     <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-14">
      {products.map((product) => (
        <CategoryProduct
         key={product._id} 
         product={product}
         setBuyMobile={setBuyMobile }
         ></CategoryProduct>
      ))}
    </div>
     { 
     buyMobile &&
     <BookingModal
      buyMobile={buyMobile}
      setBuyMobile={setBuyMobile }
      ></BookingModal>}
   </section>
  );
};

export default MyProducts;
