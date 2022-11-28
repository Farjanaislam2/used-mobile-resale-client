import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import ConfirmModal from "./../../Home/Shared/ConfirmModal/ConfirmModal";

const Sellers = () => {
  const [deletingSeller, setDeletingSeller] = useState(null);

  const closeModal = () => {
    setDeletingSeller(null);
  };

 
  const { data: sellers = [], refetch } = useQuery({
    queryKey: ["sellers"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/sellers", {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
      
    },
  });

  const handleMakeVerify = (email) => {
    fetch(`http://localhost:5000/users/sellers/${email}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        refetch()
      });
  };

  const handleDeleteSeller = (seller) => {
    fetch( `http://localhost:5000/sellers/${seller._id}`,{
      method: 'DELETE',
      headers:{
        authorization: `bearer ${localStorage.getItem('accessToken')}`
      }
    })
    .then(res => res.json())
    .then(data =>{
      if(data.deletedCount > 0){
      refetch()
      toast.success('seller deleted successfully')
      }
    })
  };

  return (
    <div>
      <h1 className="text-3xl text-center mt-5 font-bold text-green-500">
        All Sellers
      </h1>
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
            {sellers.map((seller, i) => (
              <tr key={seller._id}>
                <th>{i + 1}</th>
                <td>{seller.name}</td>
                <td>{seller.email}</td>
                <td>
                  {sellers?.role !== "admin" && (
                    <button
                      onClick={() => handleMakeVerify(sellers.sellerEmail)}
                      className="btn btn-success"
                    >
                      Verify seller
                    </button>
                  )}
                </td>
                <label
                  onClick={() => setDeletingSeller(seller)}
                  htmlFor="confirm-modal"
                  className="btn mt-5 btn-secondary"
                >
                  Delete
                </label>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deletingSeller && 
        <ConfirmModal
          title={`Are you sure you want to delete?`}
          message={`if you delete ${deletingSeller.name} you cannot be undone.`}
          successAction={handleDeleteSeller}
          succesButtonName='Delete'
          modalData = {deletingSeller}
          closeModal={closeModal}
        ></ConfirmModal>
      }
    </div>
  );
};

export default Sellers;
