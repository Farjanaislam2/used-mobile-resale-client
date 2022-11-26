import { useQuery } from '@tanstack/react-query';
import React from 'react';


const Sellers = () => {
    const {data: sellers =[]} = useQuery({
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
        <th>Seller</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
        {
        sellers.map((seller,i) => <tr key={seller._id}>
            <th>{i+1}</th>
        <td>{seller.name}</td>
        <td>{seller.email}</td>
        <td>seller</td>
        <td><button className='btn btn-success'>Make Seller</button></td>
        <td><button className='btn btn-secondary'>Delete</button></td>
        </tr>)
        }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Sellers;