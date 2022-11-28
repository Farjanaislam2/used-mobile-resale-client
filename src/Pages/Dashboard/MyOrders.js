import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Authcontext } from "../../context/Authprovider";

const MyOrders = () => {
  const { user } = useContext(Authcontext);

  const url = `https://used-product-resale-market-server.vercel.app/bookings?email=${user?.email}`;

  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem('accessToken')}`
        }
      });
      const data = await res.json();
      return data;
    },
  });
  return (
    <div>
      <h1 className="text-3xl text-center mt-5 mb-4 font-bold text-green-700 ">
        Orders
      </h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Customer Name</th>
              <th>Address</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, i) => 
            <tr key={booking._id}>
                <th>{i+1}</th>
                <th>{booking.buyerName}</th>
                <th>{booking.productName}</th>
                <th>{booking.phone}</th>
                <th>{booking.address}</th>
                
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
