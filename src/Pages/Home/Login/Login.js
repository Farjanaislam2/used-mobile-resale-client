import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const { register,formState: { errors }, handleSubmit } = useForm();
  
  const handleLogin = data =>{
    console.log(data)

  }
  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7 border rounded-md">
        <h2 className="text-4xl text-green-600 font-bold">Login</h2>
        <form onSubmit={handleSubmit((handleLogin))}>
          <div className="form-control w-full max-w-xs">
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
          <input className="btn btn-success w-full mt-5" value='Login' type="submit" />
        </form>
        <p className="text-green-700 mt-3">New to resale market ? <Link to='/signup' className="text-blue-700">Create an account</Link></p>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
      </div>
     
    </div>
  );
};

export default Login;
