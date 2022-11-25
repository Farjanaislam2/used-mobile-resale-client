import React from "react";

const BookingModal = ({ buyMobile,setBuyMobile}) => {
  const { name, SellingPrice } = buyMobile;

const handlPurchase =event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const address = form.address.value;

const buying = {
 productName:name,
 buyerName:name,
  email,
  phone,
  address
}
    console.log(buying)
    setBuyMobile(null)
    
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
          <h3 className="text-lg font-bold">{name}</h3>

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
              name="name"
              placeholder="Your Name"
              className="input input-bordered input-info w-full  mt-3"
            />
            <input
              type="email"
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
