import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CategoryProduct from "./CategoryProduct";
import BookingModal from './BookingModal/BookingModal';
import Loading from "../Home/Shared/Loading/Loading";
import toast from "react-hot-toast";

const MyProducts = () => {
  const [product,setProduct] =useState({})
  const {id} =useParams()
  console.log(id)
useEffect( ()=>{
  fetch(`https://used-product-resale-market-server.vercel.app/singlecategories/${id}`)
  .then(res =>res.json())
  .then(res =>{
    setProduct(res)
    console.log(res)
  })
},[id])
  // const product = useLoaderData();
  const [loading, setLoading] = useState(true)
  // console.log(product.title)
  const [buyMobile, setBuyMobile] = useState(null);
const [products, setProducts] = useState([])

  useEffect(() =>{
if(product.title){
  fetch(`https://used-product-resale-market-server.vercel.app/allProducts/${product.title}`)
  .then(res =>res.json())
  .then(data => setProducts(data))
}
    setLoading(false)
  }, [product, loading])
console.log(products)

const handleReport = id =>{
  fetch(`https://used-product-resale-market-server.vercel.app/allProducts/${id}`,{
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
