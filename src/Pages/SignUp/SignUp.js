import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SignUp = () => {
    const { register,formState: { errors }, handleSubmit } = useForm();
  
    const handleSignUp= data =>{
      console.log(data)
  
    }

    return (
        <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7 border rounded-md">
        <h2 className="text-4xl text-green-600 font-bold">SignUp</h2>
        <form onSubmit={handleSubmit((handleSignUp))}>
          <div className="form-control w-full max-w-xs">
          <label className="label">
              <span className="label-text-alt">Name</span>
            </label>
            
            <input
              type="text"
              {...register("name", { required: "name is required"})}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.name && <p className="text-red-400" role="alert">{errors.name?.message}</p>}
            <label className="label">
              <span className="label-text-alt">Email</span>
            </label>
            
            <input
              type="text"
              {...register("email", { required: "Email Address is required"})}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && <p className="text-red-400" role="alert">{errors.email?.message}</p>}
             
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text-alt">Password</span>
            </label>
            <input
              type="password"
              {...register("password",
                { required: "Password is required",
                
            })}
              className="input input-bordered w-full max-w-xs"
            />
              {errors.password && <p className="text-red-400" role="alert">{errors.password?.message}</p>}
          </div>
          <input className="btn btn-success w-full mt-5" value='SignUp' type="submit" />
        </form>
        <p className="text-green-700 mt-3">Already have an account ? <Link to='/login' className="text-blue-700">login</Link></p>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
      </div>
     
    </div>
    );
};

export default SignUp;