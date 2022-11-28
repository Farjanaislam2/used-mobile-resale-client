import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import ConfirmModal from "../../Home/Shared/ConfirmModal/ConfirmModal";

const Allusers = () => {

  const [deletingUser, setDeletingUser] = useState(null);

  const closeModal = () => {
    setDeletingUser(null);
  };

 

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("https://used-product-resale-market-server.vercel.app/users");
      const data = await res.json();
      return data;
    },
  });
  const handleMakeAdmin = (id) => {
    fetch(`https://used-product-resale-market-server.vercel.app/users/admin/${id}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Make admin successfully");
          refetch();
        }
      });
  };


  const handleDeleteUser = (user) => {
    fetch(`https://used-product-resale-market-server.vercel.app/users/${user._id}`,{
      method: 'DELETE',
      headers:{
        authorization: `bearer ${localStorage.getItem('accessToken')}`
      }
    })
    .then(res => res.json())
    .then(data =>{
      if(data.deletedCount > 0){
        refetch()
        toast.success('user deleted successfully')
        }
    })
  };


  return (
    <div>
      <h1 className="text-3xl text-center mt-5 font-bold text-green-500">
        All Users
      </h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Admin</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={user._id}>
                <th>{i + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user?.role !== "admin" && (
                    <button
                      onClick={() => handleMakeAdmin(user._id)}
                      className="btn btn-success"
                    >
                      Make Admin
                    </button>
                  )}
                </td>
                <td>
                <label
                  onClick={() => setDeletingUser(user)}
                  htmlFor="confirm-modal"
                  className="btn mt-5 btn-secondary"
                >
                  Delete
                </label>
                 
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deletingUser && 
        <ConfirmModal
          title={`Are you sure you want to delete?`}
          message={`if you delete ${deletingUser.name} you cannot be undone.`}
          successAction={handleDeleteUser}
          succesButtonName='Delete'
          modalData = {deletingUser}
          closeModal={closeModal}
        ></ConfirmModal>
      }
    </div>
  );
};

export default Allusers;
