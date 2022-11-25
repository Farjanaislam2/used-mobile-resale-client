import React, { useState } from 'react';
import { useForm } from 'react-hook-form';


const AddProducts = () => {
const {register} = useForm();
    const [items, setItems] = useState('');
    return (
        <div className="h-[800px] flex justify-center items-center">
           <div className="w-96 p-7 border rounded-md">
           <h1 className="text-4xl text-green-600 font-bold">Add New Product</h1>
            <form>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text-alt">Product Name</span>
            </label>
            <input
              type="text"
              {...register("email")}
              className="input input-bordered w-full max-w-xs"
            />
            
          </div>
         <div className='flex'>
         <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text-alt">Price</span>
            </label>
            <input
              type="text"
              {...register("email")}
              className="input input-bordered w-full max-w-xs"
            />
            
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text-alt">Condition</span>
            </label>
            <input
              type="text"
              {...register("email")}
              className="input input-bordered w-full max-w-xs"
            />
            
          </div>
         </div>
        <div className='flex'>
        <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text-alt">Uses time</span>
            </label>
            <input
              type="text"
              {...register("email")}
              className="input input-bordered w-full max-w-xs"
            />
            
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text-alt">Location</span>
            </label>
            <input
              type="text"
              {...register("email")}
              className="input input-bordered w-full max-w-xs"
            />
            
          </div>
        </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text-alt">Image</span>
            </label>
            <input
              type="text"
              {...register("email")}
              className="input input-bordered w-full max-w-xs"
            />
            
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text-alt">Description</span>
            </label>
            <input
              type="text"
              {...register("email")}
              className="input input-bordered w-full max-w-xs"
            />
            
          </div>
         
        </form>
           </div>
        </div>
    );
};

export default AddProducts;