import React, { useContext } from "react";
import { Authcontext } from "../../../context/Authprovider";
import { toast } from 'react-hot-toast';

const BookingModal = ({ buyMobile,setBuyMobile}) => {
  const { name:productsName, SellingPrice } = buyMobile;
  const {user} = useContext(Authcontext);

const handlPurchase =event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const address = form.address.value;

const buying = {
 productName:productsName,
 buyerName:name,
  email,
  phone,
  address
}

fetch('https://used-product-resale-market-server.vercel.app/bookings', {
  method: 'POST',
  headers:{
    'content-type': 'application/json'
  },
  body: JSON.stringify(buying)
})
.then(res => res.json())
.then(data =>{
  console.log(data)
 if(data.acknowledged){
  setBuyMobile(null)
  toast.success('Booking confirmed')
 }
})
    
    
    
}

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{productsName}</h3>

          <form onSubmit={handlPurchase }>
          <input
              type="text"
              name="price"
              disabled
              value={SellingPrice}
              className="input input-bordered input-info w-full  mt-3"
            />
            <input
              type="text"
              defaultValue={user?.displayName}
              disabled
              name="name"
              placeholder="Your Name"
              className="input input-bordered input-info w-full  mt-3"
            />
            <input
              type="email"
              defaultValue={user?.email}
              disabled
              name="email"
              placeholder="Email"
              className="input input-bordered input-info w-full  mt-3"
            />
             <input
              type="text"
              name="phone"
              placeholder="Phone number"
              className="input input-bordered input-info w-full  mt-3"
            />
             <input
              type="text"
              name="address"
              placeholder="your address"
              className="input input-bordered input-info w-full  mt-3"
            />
            <input
              type="submit"
              className="input w-full  mt-5 btn btn-success"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
