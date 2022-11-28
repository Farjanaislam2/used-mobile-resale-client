import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';
import { useState } from 'react';
import ConfirmModal from './../../Home/Shared/ConfirmModal/ConfirmModal';


const Sellers = () => {
  const [deleteSeller, setDeleteSeller] =useState(null)

const closeModal = ()=>{
  setDeleteSeller(null);
}

    const {data: sellers =[],refetch} = useQuery({
        queryKey: ['sellers'],
        queryFn: async()=>{
            const res = await fetch('http://localhost:5000/sellers',{
                headers:{
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data= await res.json();
            return data;
        }
    })


    const handleMakeVerify =email =>{
        fetch(`http://localhost:5000/users/sellers/${email}`,{
          method: 'PUT',
          headers:{
            authorization: `bearer ${localStorage.getItem('accessToken')}`
        }
        })
        .then(res =>res.json())
        .then(data =>{
       console.log(data)
        })
      }


    return (
        <div>
            <h1 className='text-3xl text-center mt-5 font-bold text-green-500'>All Sellers</h1>
            <div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
      <tr>
      <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Verify</th>
        <th>Delete</th>
        
      </tr>
    </thead>
    <tbody>
        {
        sellers.map((seller,i) => <tr key={seller._id}>
            <th>{i+1}</th>
        <td>{seller.name}</td>
        <td>{seller.email}</td>
        <td>{sellers?.role !== 'admin' && <button onClick={()=>handleMakeVerify(sellers.sellerEmail)} className='btn btn-success'>Verify seller</button>}</td>
        <label onClick={()=> setDeleteSeller(seller)} htmlFor="confirm-modal" className="btn mt-5 btn-secondary">
              Delete
            </label>
        </tr>)
        }
    </tbody>
  </table>
  {
    deleteSeller && <ConfirmModal>
title={`Are you sure you want to delete?`}
message={`if you delete ${deleteSeller.name} you cannot be undone.`}
closeModal={closeModal}
    </ConfirmModal>
  }
</div>
        </div>
    );
};

export default Sellers;