import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import Loading from '../Home/Shared/Loading/Loading';
import MyProductss from './MyProductss';
import useSeller from './../../hooks/useSeller';
import { Authcontext } from './../../context/Authprovider';

const MyProduct = () => {
    const {user} = useContext(Authcontext)
    const [isSeller]= useSeller(user?.email)
    const {data:myProducts, isLoading } =useQuery({
        queryKey: ['myProducts',user?.email],
        queryFn: async () =>{
            try{
                const res =await fetch(`http://localhost:5000/myProducts/${user?.email}`,{
                    headers:{
                        authorization: `bearer ${localStorage.getItem('accessToken')}`

                    }

                });
                const data = await res.json();
                return data;
            }
            catch(error){

            }
        }
    })

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div>
          <div>
          <h1 className='text-4xl text-center mt-5 text-green-700'>My Products: {myProducts?.length}</h1> 

        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-14 '>
        {
             

             myProducts.map(myProduct => <div className="card w-96  bg-base-100 shadow-xl">
             <figure><img src={myProduct.picture} alt="Shoes" /></figure>
             <div className="card-body">
               <h2 className="card-title text-3xl text-green-900 font-bold">{myProduct.productName}</h2>
               <h2>{myProduct.about}</h2>
              <div className='flex justify-between mt-3'>
              <h2 className="card-title">Original price:{myProduct.buyingPrice}</h2>
               <h2 className="card-title">Sell:{myProduct.sellingPrice}</h2>
              </div>
               <h2 className="card-title">use: {myProduct.year}years</h2>
               <p className='text-green-500 mt-2 mb-2'>Location: {myProduct.address}</p>
               <div className="card-actions justify-end">
                 <p> <small>SellerName :  {myProduct.sellerName}</small> </p>

                 <label htmlFor="booking-modal"
                  className="btn btn-success mt-2"
                  >Purchase</label>
                <div className='flex '>
                    {
                        isSeller && <>
                         <label htmlFor="booking-modal"
                  className="btn btn-success mt-2"
                  >Available</label>
                 <label htmlFor="booking-modal"
                  className="btn btn-success mt-2"
                  >Add To Advertise</label>
                        </>
                    }
               
              
                </div>
               </div>
             </div>
           
           </div>    


           )
         }
        </div>
       
          </div>
       
        </div>
    );
};

export default MyProduct;