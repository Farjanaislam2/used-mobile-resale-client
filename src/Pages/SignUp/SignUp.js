import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Authcontext } from "./../../context/Authprovider";
import { toast } from "react-hot-toast";
import useToken from "../../hooks/useToken";

const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { createUser, updateUser } = useContext(Authcontext);
  const [signUpError, setSignUpError] = useState("");

  const [createdUserEmail, setCreatedUserEmail] = useState("");
  const [token] = useToken(createdUserEmail);
  const navigate = useNavigate();

  if (token) {
    navigate("/");
  }

  const handleSignUp = (data) => {
    console.log(data);
    setSignUpError("");

    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast("user created successfully");

        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then(() => {
            saveUser(data.name, data.email, data.account);
          })
          .catch((err) => console.log(err));
      })
      .catch((error) => {
        console.log(error.message);
        setSignUpError(error.message);
      });

    const saveUser = (name, email, role) => { 
      const user = { name, email, role };
      fetch("https://used-product-resale-market-server.vercel.app/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => {
          setCreatedUserEmail(email);
        });
    };
  };

  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7 border rounded-md">
        <h2 className="text-4xl text-green-600 font-bold">SignUp</h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text-alt">Name</span>
            </label>

            <input
              type="text"
              {...register("name", { required: "name is required" })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.name && (
              <p className="text-red-400" role="alert">
                {errors.name?.message}
              </p>
            )}
            <label className="label">
              <span className="label-text-alt">Email</span>
            </label>

            <input
              type="text"
              {...register("email", { required: "Email Address is required" })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-red-400" role="alert">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text-alt">Password</span>
            </label>
            <input
              type="password"
              {...register("password", { required: "Password is required" })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && (
              <p className="text-red-400" role="alert">
                {errors.password?.message}
              </p>
            )}
          </div>
          <div className="mt-5">
            <select
              required
              {...register("account", { required: "select account type" })}
              className="select select-bordered w-full max-w-xs"
            >
              <option value="buyer">Buyer</option>
              <option value="seller">Seller</option>
            </select>
          </div>
          <input
            className="btn btn-success w-full mt-5"
            value="SignUp"
            type="submit"
          />
          {signUpError && <p className="text-red-400">{signUpError}</p>}
        </form>
        <p className="text-green-700 mt-3">
          Already have an account ?{" "}
          <Link to="/login" className="text-blue-700">
            login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
