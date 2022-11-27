import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import Loading from "./../../Home/Shared/Loading/Loading";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddProducts = () => {
  const {register, formState: { errors }, handleSubmit,}= useForm();

  const imgHostingKey =process.env.REACT_APP_imgbb_key

  const navigate = useNavigate();

  const { data: addedProducts, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/addProductCategory");
      const data = await res.json();
      console.log(data);
      return data;
    },
  });

  const handleAddProduct = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?key=${imgHostingKey}`
    fetch(url,{
      method: 'POST',
      body: formData
    })
    .then(res =>res.json())
    .then(imgData =>{
      if(imgData.success){
        console .log(imgData.data.url)
        const myProducts = {
          productName:data.name,
          sellerName:data.sellerName,
          condition:data.condition,
          email:data.email,
          category:data.category,
          image:imgData.data.url,
          address:data.address,
          about:data.about,
          phone:data.phone,
          buyingPrice:data.buyingPrice,
          sellingPrice:data.sellingPrice,
          year:data.year,

        
        }

        //save adding products
        fetch('http://localhost:5000/myProducts', {
          method: 'POST',
          headers:{
            'content-type': 'application/json',
            authorization: `bearer ${localStorage.getItem('accessToken')}`
          },
          body: JSON.stringify(myProducts)
        })
        .then(res =>res.json())
        .then(result =>{
          console.log(result);
          toast.success(`${data.name} is added successfully`);
          navigate('/dashboard/myProduct');
        })
      }
    })
  };

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-100 p-7 border rounded-md">
        <h1 className="text-4xl text-center mt-5 text-green-700">
          Add Product
        </h1>

        <form onSubmit={handleSubmit(handleAddProduct)}>
          <div className="form-control w-full max-w-sm">
           <div className="flex">
           <div>
              <label className="label">
                <span className="label-text-alt">Seller Name</span>
              </label>

              <input
                type="text"
                {...register("sellerName", { required: "sellerName is required" })}
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div>
            <div>
              <label className="label">
                <span className="label-text-alt">Product Name</span>
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
            </div>
            </div>
           </div>
            <div>
              <label className="label">
                <span className="label-text-alt">Email</span>
              </label>

              <input
                type="email"
                {...register("email", { required: "email is required" })}
                className="input input-bordered w-full max-w-xs"
              />

              {errors.email && (
                <p className="text-red-400" role="alert">
                  {errors.email?.message}
                </p>
              )}
            </div>
           <div>
           <label className="label">
              <span className="label-text-alt">Photo</span>
            </label>
            <input
              type="file"
              {...register("image", { required: "img is required" })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.img && (
              <p className="text-red-400" role="alert">
                {errors.name?.message}
              </p>
            )}
           </div>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text-alt">Category</span>
            </label>
            <select
              {...register("category", { required: "category is required" })}
              className="select select-success w-full max-w-xs"
            >
              {addedProducts.map((addedProduct) => (
                <option key={addedProduct._id} value={addedProduct.title}>
                  {addedProduct.title}
                </option>
              ))}
            </select>
          </div>
          <div className="flex">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text-alt">Condition</span>
              </label>
              <select
                {...register("condition", {
                  required: "condition is required",
                })}
                className="select select-success w-full max-w-xs"
              >
                <option selected>Good</option>
                <option>Excelent</option>
                <option>Fair</option>
              </select>
            </div>
            <div>
              <label className="label">
                <span className="label-text-alt">Buying Price</span>
              </label>

              <input
                type="number"
                {...register("buyingPrice", { required: "buyingPrice is required" })}
                className="input input-bordered w-full max-w-xs"
              />

              {errors.buyingPrice && (
                <p className="text-red-400" role="alert">
                  {errors.buyingPrice?.message}
                </p>
              )}
            </div>
            <div>
              <label className="label">
                <span className="label-text-alt">Selling Price</span>
              </label>

              <input
                type="number"
                {...register("sellingPrice", { required: "sellingPrice is required" })}
                className="input input-bordered w-full max-w-xs"
              />

              {errors.sellingPrice && (
                <p className="text-red-400" role="alert">
                  {errors.sellingPrice?.message}
                </p>
              )}
            </div>
          </div>
          <div className="flex">
            <div>
              <label className="label">
                <span className="label-text-alt">Year use</span>
              </label>

              <input
                type="number"
                {...register("year", { required: "year is required" })}
                className="input input-bordered w-full max-w-xs"
              />

              {errors.year && (
              <p className="text-red-400" role="alert">
                {errors.year?.message}
              </p>
            )}
            </div>

            <div>
              <label className="label">
                <span className="label-text-alt">Phone Number</span>
              </label>

              <input
                type="phone"
                {...register("phone", { required: "phone is required" })}
                className="input input-bordered w-full max-w-xs"
              />

              {errors.year && (
              <p className="text-red-400" role="alert">
                {errors.year?.message}
              </p>
            )}
            </div>
          </div>
          <div>
          <label className="label">
            <span className="label-text-alt">About</span>
          </label>

          <input
            type="text"
            {...register("about", {
              required: "about is required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.about && (
              <p className="text-red-400" role="alert">
                {errors.about?.message}
              </p>
            )}
          </div>
          <div>
          <label className="label">
            <span className="label-text-alt">Address</span>
          </label>

          <input
            type="text"
            {...register("address", {
              required: "address is required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.about && (
              <p className="text-red-400" role="alert">
                {errors.address?.message}
              </p>
            )}
          </div>
          <input
            className="btn btn-success w-full mt-5"
            value="Add Product"
            type="submit"
          />
        </form>
      </div>{" "}
    </div>
  );
};

export default AddProducts;
