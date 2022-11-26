import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Allusers = () => {
    const {data: users =[]} = useQuery({
        queryKey: ['users'],
        queryFn: async()=>{
            const res = await fetch('http://localhost:5000/users')
            const data= await res.json();
            return data;
        }
    })
    return (
        <div>
            <h1 className='text-3xl text-center mt-5 font-bold text-green-500'>All Users</h1>
            <div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Seller</th>
        <th>Admin</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
        {
        users.map((user,i) => <tr key={user._id}>
            <th>{i+1}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>seller</td>
        <td><button className='btn btn-success'>Make Admin</button></td>
        <td><button className='btn btn-secondary'>Delete</button></td>
        </tr>)
        }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Allusers;