import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import CategoryProduct from "./CategoryProduct";
import BookingModal from './BookingModal/BookingModal';
import Loading from "../Home/Shared/Loading/Loading";
import toast from "react-hot-toast";

const MyProducts = () => {
  const product = useLoaderData();
  const [loading, setLoading] = useState(true)
  console.log(product.title)
  const [buyMobile, setBuyMobile] = useState(null);
const [products, setProducts] = useState([])

  useEffect(() =>{
    fetch(`http://localhost:5000/allProducts/${product.title}`)
    .then(res =>res.json())
    .then(data => setProducts(data))
    setLoading(false)
  }, [product.title, loading])
console.log(products)

const handleReport = id =>{
  fetch(`http://localhost:5000/allProducts/${id}`,{
      method: 'PUT',
      headers: {
          authorization: `bearer ${localStorage.getItem('accessToken')}`
      }
  })
  .then(res => res.json())
  .then(data =>{
      if(data.modifiedCount >0 ){
          toast.success('Successfully Reported');
      }
  })
}

  if(loading){
    return <Loading></Loading>


  }

  // apu done 
  return (
   <section>
     <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-14">
      {products.map((product) => (
        <CategoryProduct
         key={product._id} 
         product={product}
         setBuyMobile={setBuyMobile }
         handleReport={handleReport}
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
