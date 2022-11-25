import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Authcontext } from '../../context/Authprovider';

const MyOrders = () => {
    const {user} =useContext(Authcontext);

    const url = `http://localhost:5000/bookings?email =${user?.email}`;

    const { data: bookings =[]} = useQuery({
        queryKey: ['bookins', user?.email],
        queryFn: async() =>{
            const res = await fetch(url);
            const data = await res.json();
        }
    });
    return (
        <div>
            <h1 className='text-3xl text-center mt-5 mb-4 font-bold text-green-700 '>Orders</h1>
            <div className="overflow-x-auto">
  <table className="table w-full">
 
    <thead>
      <tr>
        <th></th>
        <th>name</th>
        <th>address</th>
        <th>phone</th>
      </tr>
    </thead>
    <tbody>
      
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
      
      <tr>
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
      </tr>
      
      <tr>
        <th>3</th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
      </tr>
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyOrders;